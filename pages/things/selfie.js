import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../components/selfie.module.css";
import { Component } from "react";

class SelfieApp extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isStreaming: false,
      facingMode: 'user',
      flashVisible: false,
      photos: []
    };
    
    this.videoRef = null;
    this.canvasRef = null;
    this.streamRef = null;
    this.photoId = 0;
    
    // Bind methods
    this.startCamera = this.startCamera.bind(this);
    this.stopCamera = this.stopCamera.bind(this);
    this.flipCamera = this.flipCamera.bind(this);
    this.capturePhoto = this.capturePhoto.bind(this);
    this.downloadPhoto = this.downloadPhoto.bind(this);
    this.getRandomPosition = this.getRandomPosition.bind(this);
  }
  
  componentWillUnmount() {
    if (this.streamRef) {
      this.streamRef.getTracks().forEach(track => track.stop());
    }
  }
  
  async startCamera(mode = null) {
    const facingMode = mode || this.state.facingMode;
    
    try {
      // Stop existing stream
      if (this.streamRef) {
        this.streamRef.getTracks().forEach(track => track.stop());
      }
      
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: facingMode,
          width: { ideal: 1920 }, 
          height: { ideal: 1080 } 
        }
      });
      
      this.streamRef = stream;
      
      if (this.videoRef) {
        this.videoRef.srcObject = stream;
        this.setState({ isStreaming: true, facingMode: facingMode });
      }
    } catch (error) {
      alert('Unable to access camera. Please make sure you have granted camera permissions.');
    }
  }
  
  stopCamera() {
    if (this.streamRef) {
      this.streamRef.getTracks().forEach(track => track.stop());
      this.streamRef = null;
    }
    
    if (this.videoRef) {
      this.videoRef.srcObject = null;
    }
    
    this.setState({ isStreaming: false });
  }
  
  flipCamera() {
    const newMode = this.state.facingMode === 'user' ? 'environment' : 'user';
    this.startCamera(newMode);
  }
  
  getRandomPosition() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    
    // Try to place photo away from the center card
    for (let i = 0; i < 10; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 200 + Math.random() * Math.min(vw, vh) * 0.3;
      const x = Math.cos(angle) * dist;
      const y = Math.sin(angle) * dist;
      
      const photoX = vw / 2 + x;
      const photoY = vh / 2 + y;
      
      // Check if it's within viewport bounds
      if (photoX > 160 && photoX < vw - 160 && photoY > 120 && photoY < vh - 120) {
        return { x, y };
      }
    }
    
    // Fallback position
    return { x: -vw * 0.25, y: -vh * 0.25 };
  }
  
  capturePhoto() {
    if (!this.videoRef || !this.canvasRef) return;
    
    const canvas = this.canvasRef;
    const video = this.videoRef;
    const context = canvas.getContext('2d');
    
    if (!context) return;
    
    // Set canvas size to video size
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Flip image if using front camera
    if (this.state.facingMode === 'user') {
      context.translate(canvas.width, 0);
      context.scale(-1, 1);
    }
    
    // Draw video frame to canvas
    context.drawImage(video, 0, 0);
    context.setTransform(1, 0, 0, 1, 0, 0);
    
    // Convert to data URL
    const dataURL = canvas.toDataURL('image/jpeg', 0.92);
    
    // Create new photo object
    const { x, y } = this.getRandomPosition();
    const rotation = (Math.random() - 0.5) * 30;
    const newPhoto = {
      id: this.photoId++,
      src: dataURL,
      x: x,
      y: y,
      rotation: rotation,
      placed: false
    };
    
    // Add photo to state
    this.setState(prevState => ({
      photos: [...prevState.photos, newPhoto],
      flashVisible: true
    }));
    
    // Animate photo into position
    setTimeout(() => {
      this.setState(prevState => ({
        photos: prevState.photos.map(photo => 
          photo.id === newPhoto.id ? { ...photo, placed: true } : photo
        )
      }));
    }, 50);
    
    // Hide flash
    setTimeout(() => {
      this.setState({ flashVisible: false });
    }, 200);
  }
  
  downloadPhoto(src, id) {
    const link = document.createElement('a');
    link.href = src;
    link.download = `selfie-${id}.jpg`;
    link.click();
  }
  
  render() {
    const { isStreaming, flashVisible, photos } = this.state;
    
    return (
      <Layout>
        <Head>
          <title>Quick Selfie | Yaosamo</title>
          <meta name="description" content="Take quick selfies with filters and instant download" />
        </Head>
        
        <div className={styles.pageWrap}>
          {/* Flash overlay */}
          <div className={`${styles.flash} ${flashVisible ? styles.active : ''}`} />
          
          {/* Scattered photos */}
          <div className={styles.photos}>
            {photos.map((photo) => (
              <div
                key={photo.id}
                className={styles.photo}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${photo.x}px), calc(-50% + ${photo.y}px)) rotate(${photo.rotation}deg)`,
                  transition: photo.placed ? 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
                }}
              >
                <img src={photo.src} alt={`Selfie ${photo.id}`} draggable="false" />
                <div className={styles.photoActions}>
                  <button
                    className={styles.photoBtn}
                    onClick={() => this.downloadPhoto(photo.src, photo.id)}
                    title="Download"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7,10 12,15 17,10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Main camera card */}
          <div className={styles.card}>
            <div className={styles.header}>
              <h1 className={styles.title}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Quick Selfie
              </h1>
              <p className={styles.subtitle}>Look good, capture it, share it ✨</p>
            </div>
            
            <div className={styles.cameraContainer}>
              <video
                ref={(ref) => this.videoRef = ref}
                autoPlay
                playsInline
                muted
                className={styles.video}
                style={{
                  transform: this.state.facingMode === 'user' ? 'scaleX(-1)' : 'scaleX(1)'
                }}
              />
              
              {!isStreaming && (
                <div className={styles.placeholder}>
                  <svg className={styles.placeholderIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                  <p>Tap "Start Camera" below</p>
                </div>
              )}
              
              {isStreaming && (
                <div className={styles.controls}>
                  <button
                    className={styles.controlBtn}
                    onClick={this.flipCamera}
                    title="Flip camera"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="1,4 1,10 7,10" />
                      <polyline points="23,20 23,14 17,14" />
                      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
                    </svg>
                  </button>
                  <button
                    className={styles.controlBtn}
                    onClick={this.stopCamera}
                    title="Stop camera"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
            
            <div className={styles.actions}>
              {!isStreaming ? (
                <button
                  className={`${styles.button} ${styles.primaryButton}`}
                  onClick={() => this.startCamera()}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                  Start Camera
                </button>
              ) : (
                <button
                  className={`${styles.button} ${styles.captureButton}`}
                  onClick={this.capturePhoto}
                >
                  <div className={styles.captureIcon} />
                  Capture
                </button>
              )}
              
              {photos.length > 0 && (
                <button
                  className={`${styles.button} ${styles.secondaryButton}`}
                  onClick={() => alert(`You have ${photos.length} photos! Hover over them to download.`)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21,15 16,10 5,21" />
                  </svg>
                  All ({photos.length})
                </button>
              )}
            </div>
          </div>
          
          {/* Hidden canvas for photo capture */}
          <canvas
            ref={(ref) => this.canvasRef = ref}
            style={{ display: 'none' }}
          />
        </div>
      </Layout>
    );
  }
}

export default SelfieApp;