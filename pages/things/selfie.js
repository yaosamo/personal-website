import { useState, useRef, useCallback, useEffect } from 'react';
import Head from "next/head";
import styles from "../../components/selfie.module.css";

const PHOTO_STYLES = [
  { name: 'Original', filter: 'none' },
  { name: 'B&W', filter: 'grayscale(100%)' },
  { name: 'Faded', filter: 'grayscale(40%) sepia(20%) brightness(1.1)' },
  { name: 'High Contrast', filter: 'contrast(1.5) saturate(1.3)' },
  { name: 'Warm', filter: 'sepia(40%) saturate(1.4) brightness(1.05)' },
  { name: 'Cool', filter: 'saturate(0.8) brightness(1.05) hue-rotate(15deg)' },
  { name: 'Vivid', filter: 'saturate(2) contrast(1.1)' },
  { name: 'Noir', filter: 'grayscale(100%) contrast(1.6) brightness(0.9)' },
  { name: 'Vintage', filter: 'sepia(60%) contrast(0.9) brightness(1.1) saturate(0.7)' },
  { name: 'Dither', filter: 'grayscale(80%) contrast(2.5) brightness(1.2)' },
];

// SVG Icons to match Lucide React icons exactly
const CameraIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
);

const SparklesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/>
    <path d="M19 17v4"/>
    <path d="M3 5h4"/>
    <path d="M17 19h4"/>
  </svg>
);

const RotateCcwIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
    <path d="M3 3v5h5"/>
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const Grid3x3Icon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <line x1="9" y1="3" x2="9" y2="21"/>
    <line x1="15" y1="3" x2="15" y2="21"/>
    <line x1="3" y1="9" x2="21" y2="9"/>
    <line x1="3" y1="15" x2="21" y2="15"/>
  </svg>
);

const Wand2Icon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 4V2"/>
    <path d="M15 16v-2"/>
    <path d="M8 9h2"/>
    <path d="M20 9h2"/>
    <path d="M17.8 11.8 19 13"/>
    <path d="M15 9h0"/>
    <path d="M17.8 6.2 19 5"/>
    <path d="m3 21 9-9"/>
    <path d="M12.2 6.2 11 5"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7,10 12,15 17,10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const CameraPlaceholderIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
);

export default function SelfieApp() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const cameraCardRef = useRef(null);
  const gridScrollRef = useRef(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [facingMode, setFacingMode] = useState('user');
  const [flashVisible, setFlashVisible] = useState(false);
  const [scatteredPhotos, setScatteredPhotos] = useState([]);
  const [dragging, setDragging] = useState(null);
  const [showGrid, setShowGrid] = useState(false);
  const [gridScroll, setGridScroll] = useState(0);
  const streamRef = useRef(null);
  const photoIdRef = useRef(0);

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (clientX, clientY) => {
      const dx = clientX - dragging.startX;
      const dy = clientY - dragging.startY;
      setScatteredPhotos(prev => prev.map(p =>
        p.id === dragging.id ? { ...p, dragX: dragging.origDragX + dx, dragY: dragging.origDragY + dy } : p
      ));
    };
    const onMouseMove = (e) => onMove(e.clientX, e.clientY);
    const onTouchMove = (e) => { e.preventDefault(); onMove(e.touches[0].clientX, e.touches[0].clientY); };
    const onUp = () => setDragging(null);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onUp);
    };
  }, [dragging]);

  useEffect(() => {
    if (!showGrid) { setGridScroll(0); return; }
    const el = gridScrollRef.current;
    if (!el) return;
    const onScroll = () => setGridScroll(el.scrollTop);
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [showGrid]);

  const startCamera = useCallback(async (mode) => {
    const useMode = mode ?? facingMode;
    try {
      if (streamRef.current) streamRef.current.getTracks().forEach(track => track.stop());
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: useMode, width: { ideal: 1920 }, height: { ideal: 1080 } }
      });
      streamRef.current = stream;
      if (videoRef.current) { 
        videoRef.current.srcObject = stream; 
        setIsStreaming(true); 
        setFacingMode(useMode);
      }
    } catch { 
      alert('Unable to access camera.'); 
    }
  }, [facingMode]);

  const stopCamera = useCallback(() => {
    if (streamRef.current) { 
      streamRef.current.getTracks().forEach(track => track.stop()); 
      streamRef.current = null; 
    }
    if (videoRef.current) videoRef.current.srcObject = null;
    setIsStreaming(false);
  }, []);

  const getScatterPosition = useCallback(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const cardRect = cameraCardRef.current?.getBoundingClientRect();
    const cardCX = cardRect ? cardRect.left + cardRect.width / 2 : vw / 2;
    const cardCY = cardRect ? cardRect.top + cardRect.height / 2 : vh / 2;
    const safeW = cardRect ? cardRect.width / 2 + 60 : 220;
    const safeH = cardRect ? cardRect.height / 2 + 60 : 280;
    let x, y;
    for (let i = 0; i < 30; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 200 + Math.random() * Math.max(vw, vh) * 0.4;
      x = Math.cos(angle) * dist;
      y = Math.sin(angle) * dist;
      const photoX = vw / 2 + x;
      const photoY = vh / 2 + y;
      if (photoX < 20 || photoX > vw - 20 || photoY < 20 || photoY > vh - 20) continue;
      if (Math.abs(photoX - cardCX) < safeW && Math.abs(photoY - cardCY) < safeH) continue;
      return { x, y };
    }
    return { x: -vw * 0.3, y: -vh * 0.35 };
  }, []);

  const capturePhoto = useCallback(() => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext('2d');
      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        if (facingMode === 'user') { 
          context.translate(canvas.width, 0); 
          context.scale(-1, 1); 
        }
        context.drawImage(video, 0, 0);
        context.setTransform(1, 0, 0, 1, 0, 0);
        const dataURL = canvas.toDataURL('image/jpeg', 0.92);
        const { x, y } = getScatterPosition();
        const rotation = (Math.random() - 0.5) * 30;
        const newId = photoIdRef.current++;
        setScatteredPhotos(prev => [...prev, {
          id: newId, src: dataURL, x: 0, y: 0, rotation: 0, dragX: 0, dragY: 0, placed: false, styleIdx: 0,
        }]);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setScatteredPhotos(prev => prev.map(p =>
              p.id === newId ? { ...p, x, y, rotation, placed: true } : p
            ));
          });
        });
        setFlashVisible(true);
        setTimeout(() => setFlashVisible(false), 200);
      }
    }
  }, [facingMode, getScatterPosition]);

  const downloadScatteredPhoto = useCallback((src, id, styleIdx) => {
    if (styleIdx === 0) {
      const link = document.createElement('a');
      link.href = src;
      link.download = `selfie-${id}.jpg`;
      link.click();
      return;
    }
    const img = new Image();
    img.onload = () => {
      const c = document.createElement('canvas');
      c.width = img.width;
      c.height = img.height;
      const ctx = c.getContext('2d');
      ctx.filter = PHOTO_STYLES[styleIdx].filter;
      ctx.drawImage(img, 0, 0);
      const link = document.createElement('a');
      link.href = c.toDataURL('image/jpeg', 0.92);
      link.download = `selfie-${id}-${PHOTO_STYLES[styleIdx].name.toLowerCase().replace(/\s/g, '-')}.jpg`;
      link.click();
    };
    img.src = src;
  }, []);

  const randomizeStyle = useCallback((id) => {
    setScatteredPhotos(prev => prev.map(p => {
      if (p.id !== id) return p;
      let newIdx;
      do { 
        newIdx = Math.floor(Math.random() * PHOTO_STYLES.length); 
      } while (newIdx === p.styleIdx && PHOTO_STYLES.length > 1);
      return { ...p, styleIdx: newIdx };
    }));
  }, []);

  const flipCamera = useCallback(() => {
    const newMode = facingMode === 'user' ? 'environment' : 'user';
    startCamera(newMode);
  }, [facingMode, startCamera]);

  const startDrag = (id, clientX, clientY) => {
    const photo = scatteredPhotos.find(p => p.id === id);
    if (!photo) return;
    setScatteredPhotos(prev => [...prev.filter(p => p.id !== id), photo]);
    setDragging({ id, startX: clientX, startY: clientY, origDragX: photo.dragX, origDragY: photo.dragY });
  };

  const getGridPositions = useCallback(() => {
    if (typeof window === 'undefined') return [];
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const cols = vw > 768 ? 3 : 2;
    const gap = 12;
    const padding = 16;
    const topOffset = 80;
    const availW = Math.min(vw - padding * 2, 900);
    const cellW = (availW - gap * (cols - 1)) / cols;
    const cellH = cellW * 0.75;
    const startX = (vw - availW) / 2;
    return scatteredPhotos.map((_, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      return {
        x: startX + col * (cellW + gap) + cellW / 2 - vw / 2,
        y: topOffset + row * (cellH + gap) + cellH / 2 - vh / 2,
        w: cellW,
        h: cellH,
      };
    });
  }, [scatteredPhotos]);

  const gridPositions = showGrid ? getGridPositions() : [];

  const gridTotalHeight = (() => {
    if (!showGrid || typeof window === 'undefined') return 0;
    const vw = window.innerWidth;
    const cols = vw > 768 ? 3 : 2;
    const gap = 12;
    const padding = 16;
    const availW = Math.min(vw - padding * 2, 900);
    const cellW = (availW - gap * (cols - 1)) / cols;
    const cellH = cellW * 0.75;
    const rows = Math.ceil(scatteredPhotos.length / cols);
    return 80 + rows * (cellH + gap) + 40;
  })();

  return (
    <>
      <Head>
        <title>Quick Selfie</title>
        <meta name="description" content="Look good, capture it, share it ✨" />
      </Head>
      
      <div className={styles.pageWrap}>
        {/* Flash overlay */}
        {flashVisible && (
          <div className={styles.flash} />
        )}

        {/* Grid overlay — scrollable backdrop */}
        {showGrid && (
          <div
            ref={gridScrollRef}
            className={styles.gridOverlay}
            style={{ overflowY: 'auto' }}
            onClick={() => setShowGrid(false)}
          >
            {/* Spacer to create scroll height */}
            <div style={{ height: `${gridTotalHeight}px`, pointerEvents: 'none' }} />

            {/* Header */}
            <div className={styles.gridHeader}>
              <h2 className={styles.gridTitle}>All Photos ({scatteredPhotos.length})</h2>
              <button
                onClick={() => setShowGrid(false)}
                className={styles.closeBtn}
              >
                <XIcon />
              </button>
            </div>
          </div>
        )}

        {/* Photos — unified, transition between scattered ↔ grid */}
        {scatteredPhotos.map((photo, idx) => {
          const gridPos = showGrid ? gridPositions[idx] : null;
          const tx = showGrid && gridPos ? gridPos.x : photo.x + photo.dragX;
          const ty = showGrid && gridPos ? gridPos.y - gridScroll : photo.y + photo.dragY;
          const rot = showGrid ? 0 : photo.rotation;
          const z = showGrid ? 160 + idx : idx + 1;
          const style = PHOTO_STYLES[photo.styleIdx];

          return (
            <div
              key={photo.id}
              className={`${styles.photo} ${styles.photoGroup}`}
              style={{
                left: '50%',
                top: '50%',
                width: showGrid && gridPos ? `${gridPos.w}px` : 'min(70vw, 22rem)',
                aspectRatio: '4/3',
                zIndex: z,
                transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) rotate(${rot}deg)`,
                transition: dragging?.id === photo.id
                  ? 'none'
                  : showGrid
                    ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), width 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                    : !photo.placed
                      ? 'none'
                      : 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                cursor: showGrid ? 'default' : (dragging?.id === photo.id ? 'grabbing' : 'grab'),
              }}
              onMouseDown={(e) => { if (showGrid) return; e.preventDefault(); startDrag(photo.id, e.clientX, e.clientY); }}
              onTouchStart={(e) => { if (showGrid) return; startDrag(photo.id, e.touches[0].clientX, e.touches[0].clientY); }}
            >
              <div className={styles.photoContainer} style={{
                boxShadow: showGrid ? '0 4px 20px rgba(0,0,0,0.1)' : '0 8px 30px rgba(0,0,0,0.2)',
                border: '3px solid white',
              }}>
                <img
                  src={photo.src}
                  alt=""
                  className={styles.photoImage}
                  style={{ filter: style.filter }}
                  draggable={false}
                />
              </div>

              {/* Style label */}
              {photo.styleIdx !== 0 && (
                <div className={styles.styleLabel}>
                  {style.name}
                </div>
              )}

              {/* Action buttons */}
              <div className={styles.photoActions} style={{ zIndex: 999 }}>
                <button
                  onClick={(e) => { e.stopPropagation(); randomizeStyle(photo.id); }}
                  onMouseDown={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  className={styles.photoBtn}
                >
                  <Wand2Icon />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); downloadScatteredPhoto(photo.src, photo.id, photo.styleIdx); }}
                  onMouseDown={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  className={styles.photoBtn}
                >
                  <DownloadIcon />
                </button>
              </div>
            </div>
          );
        })}

        {/* Camera card */}
        <div
          ref={cameraCardRef}
          className={styles.card}
          style={{ zIndex: showGrid ? 50 : 100 }}
        >
          <div className={styles.cardContent}>
            <div className={styles.header}>
              <div className={styles.titleRow}>
                <SparklesIcon />
                <h1 className={styles.title}>Quick Selfie</h1>
              </div>
              <p className={styles.subtitle}>Look good, capture it, share it ✨</p>
            </div>

            <div className={styles.cameraContainer}>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className={styles.video}
                style={{
                  transform: facingMode === 'user' ? 'scaleX(-1)' : 'scaleX(1)'
                }}
              />
              
              {!isStreaming && (
                <div className={styles.placeholder}>
                  <CameraPlaceholderIcon />
                  <p>Tap "Start Camera" below</p>
                </div>
              )}

              {isStreaming && (
                <div className={styles.controls}>
                  <button
                    className={styles.controlBtn}
                    onClick={flipCamera}
                    title="Flip camera"
                  >
                    <RotateCcwIcon />
                  </button>
                  <button
                    className={styles.controlBtn}
                    onClick={stopCamera}
                    title="Stop camera"
                  >
                    <XIcon />
                  </button>
                </div>
              )}
            </div>

            <div className={styles.actions}>
              {!isStreaming ? (
                <button
                  className={`${styles.button} ${styles.primaryButton}`}
                  onClick={() => startCamera()}
                >
                  <CameraIcon />
                  Start Camera
                </button>
              ) : (
                <button
                  className={`${styles.button} ${styles.captureButton}`}
                  onClick={capturePhoto}
                >
                  <div className={styles.captureIcon} />
                  Capture
                </button>
              )}
              
              {scatteredPhotos.length > 0 && (
                <button
                  className={`${styles.button} ${styles.secondaryButton}`}
                  onClick={() => setShowGrid(!showGrid)}
                >
                  <Grid3x3Icon />
                  All ({scatteredPhotos.length})
                </button>
              )}
            </div>
          </div>
        </div>
        
        <canvas ref={canvasRef} className={styles.hiddenCanvas} />
      </div>
    </>
  );
}