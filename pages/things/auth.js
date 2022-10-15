import styles from "../../components/auth.module.css";
import Head from "next/head";
import { useState } from "react";

export default function Auth() {
  const selectField = (nextField) => {
    if (nextField !== null) {
      nextField.focus();
    }
  };

  var [code, setCode] = useState({
    dig1: "",
    dig2: "",
    dig3: "",
    dig4: "",
  });

  const useSSNFields = () => {
    return {
      handleChange: (e) => {
        const { maxLength, value, name } = e.target;

        if (value.length >= maxLength) {
          // Get the next input field
          const nextField = document.querySelector(
            `input[name="${parseInt(name) + 1}"]`
          );
          selectField(nextField);
        }

        setCode({
          [`dig${parseInt(name)}`]: value,
        });
      },
    };
  };

  const paste = (e) => {
    const values = e.clipboardData.getData("text");
    const array = values.split("");
    setCode({ dig1: array[0], dig2: array[1], dig3: array[2], dig4: array[3] });
  };

  const validate = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const hotkeys = () => {};

  const handleKeyDown = (e) => {
    const { value, name } = e.target;
    if (e.key === "Backspace" && value === "") {
      const nextField = document.querySelector(
        `input[name="${parseInt(name) - 1}"]`
      );
      selectField(nextField);
    }
  };

  const DigitField = () => {
    const { handleChange } = useSSNFields();

    return (
      <>
        <input
          onPaste={paste}
          type="text"
          value={code.dig1}
          name={1}
          required
          maxLength={1}
          onChange={handleChange}
        />
        <input
          onKeyDown={handleKeyDown}
          type="text"
          name={2}
          required
          maxLength={1}
          value={code.dig2}
          onChange={handleChange}
        />
        <input
          onKeyDown={handleKeyDown}
          name={3}
          type="text"
          required
          maxLength={1}
          value={code.dig3}
          onChange={handleChange}
        />
        <input
          onKeyDown={handleKeyDown}
          type="text"
          required
          name={4}
          maxLength={1}
          value={code.dig4}
          onChange={handleChange}
        />
      </>
    );
  };

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
          <div className={styles.inputs}>{DigitField()}</div>
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
