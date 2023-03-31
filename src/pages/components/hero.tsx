import styles from "@/styles/Hero.module.css";

export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <img src="/images/kv.jpg" alt="" />
        <p className={styles.catchcopy}>catch copy</p>
      </div>
    </>
  );
}
