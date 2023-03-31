import NextLink from "next/link";

import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles["header"]}>
        <div className={styles.header_inner}>
          <div className={styles.header_logo}>
            <img src="../images/logo.svg" alt="企業ロゴ" />
            <p>企業名</p>
          </div>
          <nav className={styles.header_nav}>
            <ul>
              <li>
                <NextLink
                  href={{
                    pathname: ``,
                    hash: "about",
                  }}
                  passHref
                  // scroll={false}
                >
                  ABOUT
                </NextLink>
              </li>
              <li>
                {/* <Scroll to="access" smooth={true} duration={600} offset={-30}>
                  access
                </Scroll> */}
                <NextLink
                  href={{
                    pathname: ``,
                    hash: "access",
                  }}
                  passHref
                  // scroll={false}
                >
                  ACCESS
                </NextLink>
              </li>
              <li>
                <NextLink
                  href={{
                    pathname: ``,
                    hash: "contact",
                  }}
                  passHref
                  // scroll={false}
                >
                  CONTACT
                </NextLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
