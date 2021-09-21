import styles from '../styles/global.css'
import { usePanelbear } from "../hooks/panelbear";

export default function App({ Component, pageProps }) {
// Load Panelbear only once during the app lifecycle
usePanelbear("7xnHCCmKRWj", {
  // Uncomment to allow sending events on localhost, and log to console too.
  // debug: true
});

    return <Component {...pageProps} />
  }

 