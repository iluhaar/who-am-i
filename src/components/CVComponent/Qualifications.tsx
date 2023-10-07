import { useState } from "react";

import basic_styles from "./styles/basic.module.css";

export const Qualifications = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2 onClick={() => setShow((prev) => !prev)} className={basic_styles.heading}>
        Qualifications
      </h2>
      <p className={show ? basic_styles.show : basic_styles.hide}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem recusandae animi corporis, possimus
        adipisci aperiam dolores blanditiis laboriosam rem distinctio excepturi maiores dicta quaerat cupiditate nulla
        eos pariatur est.
      </p>
    </div>
  );
};
