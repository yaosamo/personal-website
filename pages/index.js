export default function Podcast() {
  return (
    <div className="container">
      
      <div className="header">
        <div className="logo">
          <img src="/images/logo.svg" alt="Your Name" />
          </div>
        <h1>And designer</h1>
      </div>

      <div className="Intro">
        <iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="175" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.podcasts.apple.com/us/podcast/intro/id1555995946?i=1000511073575&theme=light"></iframe>
      </div>
   

      <style jsx>{`
        .logo {
          text-align: center;
        }
        .container {
          max-width: 45rem;
          font-family: system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
          min-height: 40rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
        }
        h1 {}  
      `}</style>
    

    </div>
  )
  
}

