import { useState } from "react";

import basic_styles from "./styles/basic.module.css";

export const Languages = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2 onClick={() => setShow((prev) => !prev)} className={basic_styles.heading}>
        Languages
      </h2>
      <ul className={show ? basic_styles.show : basic_styles.hide}>
        <li>Ukrainian - Native</li>
        <li>English - B2 Upper intermediate</li>
      </ul>
    </div>
  );
};
