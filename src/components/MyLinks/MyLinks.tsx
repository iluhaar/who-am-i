import { githubLogo, instagramLogo, linkedinLogo, telegramLogo, twitterLogo } from "../../helpers/imgImporter";

import styles from "./mylinks.module.css";

export const MyLinks = ({ showLinks }: Props) => {
  return (
    <ul className={showLinks ? styles.listShow : styles.hideList}>
      <li className={styles.social_wrapper}>
        <a target="_blank" href="https://t.me/illiarudyi">
          <img src={telegramLogo} className={styles.socialLogo} alt="persona-telegram" />
          Telegram
        </a>
      </li>
      <li className={styles.social_wrapper}>
        <a target="_blank" href="https://www.instagram.com/illia.rudyi/">
          <img src={instagramLogo} className={styles.socialLogo} alt="instagram-page" />
          Instagram
        </a>
      </li>
      <li className={styles.social_wrapper}>
        <a target="_blank" href="https://github.com/iluhaar">
          <img src={githubLogo} className={styles.socialLogo} alt="personal-github" />
          GitHub
        </a>
      </li>
      <li className={styles.social_wrapper}>
        <a target="_blank" href="https://twitter.com/iluhaar">
          <img src={twitterLogo} className={styles.socialLogo} alt="twitter-page" />
          Twitter
        </a>
      </li>
      <li className={styles.social_wrapper}>
        <a target="_blank" href="https://www.linkedin.com/in/illia-rudyi/">
          <img src={linkedinLogo} className={styles.socialLogo} alt="linked-in" />
          LinkedIn
        </a>
      </li>
    </ul>
  );
};

interface Props {
  showLinks: boolean;
}
