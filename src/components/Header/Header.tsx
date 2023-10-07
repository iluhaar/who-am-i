import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.sticky_header}>
      <ul className={styles.menu}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li className={styles.dropdown}>
          <Link to={"/tools"}>Tools</Link>
          <ul className={styles.submenu}>
            <li>
              <Link to={"/tools/encoder"}>Encoder</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={"/links"}>My Links</Link>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Header;
