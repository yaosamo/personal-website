import styles from "./layout.module.css";

// Main container that being used everywhere with imported CSS class
export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        {children}
        <div className="footer">
          <p>
            The website build on NextJS. It's private, no trackers being used.
            Thanks for visiting & have a nice!
          </p>
        </div>
      </div>
    </div>
  );
}
