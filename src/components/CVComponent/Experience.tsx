import { useState } from "react";

import basic_styles from "./styles/basic.module.css";

export const Experience = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2 onClick={() => setShow((prev) => !prev)} className={basic_styles.heading}>
        Experience
      </h2>
      <p className={show ? basic_styles.show : basic_styles.hide}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quis tempora aliquid quos fugiat? Sit
        assumenda possimus voluptas consequuntur voluptatibus distinctio! Ex possimus quidem non autem ad quaerat
        corporis illo!
      </p>
    </div>
  );
};
