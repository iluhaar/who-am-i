import { useState } from "react";

import styles from "./home.module.css";
import { MyLinks } from "../MyLinks/MyLinks";
import { CVComponent } from "../CVComponent/CVComponent";

const Home = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div
          style={{ display: "flex", flexDirection: "column", cursor: "pointer" }}
          onClick={() => setShowLinks((prev) => !prev)}
          title="Click to see my social links"
        >
          <img className={styles.logo_me} alt="me" />
          <h2> Illia Rudyi </h2>
        </div>
        <MyLinks showLinks={showLinks} />
      </header>

      <CVComponent />
    </>
  );
};

export default Home;
