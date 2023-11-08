import styles from "./Loading.module.scss";
const LoadingPage = () => {
    return (
        <div className={styles.loadwrapp}>
        <div className={styles.load1}>
          <p>Keep patient</p>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>
    );
};

export default LoadingPage; 