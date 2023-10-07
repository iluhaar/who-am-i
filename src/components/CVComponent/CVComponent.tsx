import { Education } from "./Education";
import { Experience } from "./Experience";
import { Languages } from "./Languages";
import { Qualifications } from "./Qualifications";

import styles from "./styles/cv.module.css";

export const CVComponent = () => {
  return (
    <div className={styles.wrapper}>
      <Experience />
      <Education />
      <Qualifications />
      <Languages />
    </div>
  );
};
