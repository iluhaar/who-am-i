import { useState } from "react";
import basic_styles from "./styles/basic.module.css";

export const Education = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2 onClick={() => setShow((prev) => !prev)} className={basic_styles.heading}>
        Education
      </h2>
      <ul className={show ? basic_styles.show : basic_styles.hide}>
        <li>
          Computer Science Sep 2016 — Jan 2018" "Volodymyr Dahl East Ukrainian National University" "Bachelor degree
        </li>
        <li>
          Computer Science sep 2018 — Jan 2020" "Volodymyr Dahl East Ukrainian National University" "Master degree
        </li>
      </ul>
    </div>
  );
};
