import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_inner}>
          <div className={styles.footer_logo}>
            <img src="../images/logo.svg" alt="企業ロゴ" />
            <p>企業名</p>
          </div>
          <small>&copy; 2023 企業名</small>
        </div>
      </footer>
    </>
  );
}
