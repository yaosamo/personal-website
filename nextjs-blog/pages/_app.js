import '../styles/global.css'
import { usePanelbear } from "./../hooks/panelbear";

function CustomApp({ Component, pageProps }) {
  // Load Panelbear only once during the app lifecycle
  usePanelbear("Y7xnHCCmKRWj", {
    // Uncomment to allow sending events on localhost, and log to console too.
    // debug: true
  });

  return <Component {...pageProps} />;
}

export default CustomApp;

content_copy
Copy


export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
  }