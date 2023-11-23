import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="https://rezrad.ir">RezRad </a>| React.js
      </p>
    </div>
  );
}

export default Header;
