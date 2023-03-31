import styles from "@/styles/Access.module.css";

export default function Access() {
  return (
    <>
      <div className={styles.access} id="access">
        <h2>ACCESS</h2>
        <div className={styles.access_inner}>
          <p>
            住所
            <br />
            電話番号
            <br />
            担当者名
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.092626182388!2d139.7509884156846!3d35.69933818019003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bee0d0a8edb%3A0x17dacab684503e84!2z44ix44OE44OK44Kw44Kw44Or44O844OXSEM!5e0!3m2!1sja!2sjp!4v1679898013568!5m2!1sja!2sjp"
            width="320"
            height="400"
            // style="border:0;"
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
