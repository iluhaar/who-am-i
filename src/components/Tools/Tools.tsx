import { Link } from "react-router-dom";
import styles from "./tools.module.css";

const Tools = () => {
  return (
    <div className={styles.wrapper}>
      <ul>
        <Link to={"/tools/encoder"}>Tools</Link>
      </ul>
    </div>
  );
};

export default Tools;
