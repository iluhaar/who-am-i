import { useState } from "react";
import styles from "./encoder.module.css";

const Encoder = () => {
  const [text, setText] = useState("");

  const encodeHandler = () => {
    const encodedValue = encodeURIComponent(text);

    setText(encodedValue);
  };
  const decodeHandler = () => {
    const decodedValue = decodeURIComponent(text);

    setText(decodedValue);
  };

  return (
    <div className={styles.wrapper}>
      <h2>Encode/Decode string</h2>

      <textarea
        className={styles.textarea}
        placeholder="Input here.."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className={styles.buttons__wrapper}>
        <button onClick={decodeHandler}>Decode</button>
        <button onClick={encodeHandler}>Encode</button>
      </div>

      <>
        <ul>
          <li>Input a string of text and encode or decode it as you like.</li>
          <li>Handy for turning encoded JavaScript URLs from complete gibberish into readable gibberish.</li>
        </ul>
      </>
    </div>
  );
};

export default Encoder;
