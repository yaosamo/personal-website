import styles from "../../components/auth.module.css";
import Head from "next/head";
import { useState } from "react";

export default function Auth() {
  const useDigitfield = () => {
    const [code, setCode] = useState({
      dig1: "",
      dig2: "",
      dig3: "",
    });
  };

  const selectField = (nextField) => {
    if (nextField !== null) {
      nextField.focus();
    }
  };

  const handleChange = (e) => {
    const { maxLength, value, name } = e.target;

    if (value.length >= maxLength) {
      // Get the next input field
      const nextField = document.querySelector(
        `input[name="${parseInt(name) + 1}"]`
      );
      selectField(nextField);
    }
  };

  const paste = (e) => {
    const { maxLength, value, name } = e.target;

    console.log("pasted", value);
  };

  const validate = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleKeyDown = (e) => {
    const { value, name } = e.target;
    if (e.key === "Backspace" && value === "") {
      const nextField = document.querySelector(
        `input[name="${parseInt(name) - 1}"]`
      );
      selectField(nextField);
    }
  };

  const DigitField = [
    <input
      onKeyPress={validate}
      onKeyDown={handleKeyDown}
      type="text"
      name={1}
      required
      maxLength={1}
      onChange={handleChange}
    />,
    <input
      onKeyPress={validate}
      onKeyDown={handleKeyDown}
      type="text"
      name={2}
      required
      maxLength={1}
      onChange={handleChange}
    />,
    <input
      onKeyPress={validate}
      onKeyDown={handleKeyDown}
      name={3}
      type="text"
      required
      maxLength={1}
      onChange={handleChange}
    />,
    <input
      onKeyPress={validate}
      onKeyDown={handleKeyDown}
      type="text"
      required
      name={4}
      maxLength={1}
      onChange={handleChange}
    />,
  ];

  const [sec, setSec] = useState(30);

  if (sec >= 0) {
    setTimeout(() => {
      setSec(sec - 1);
    }, 1000);
  }

  return (
    <>
      <Head>
        {" "}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h1>Authenticate</h1>
            <div>
              <p>An authentication code has been sent to</p>
              <p className={styles.email}>your.name@gubagoo.com</p>
            </div>
          </div>
          <div className={styles.inputs}>{DigitField}</div>
          <button className={styles.button}>Verify</button>
          <a
            className={styles.link}
            onClick={() => (sec < 1 ? setSec(30) : "")}
          >
            Resend Code {sec > 0 ? "in " + sec + " sec" : ""}
          </a>
        </div>
      </div>
    </>
  );
}
