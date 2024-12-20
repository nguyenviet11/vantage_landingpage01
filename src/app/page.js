import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.mainMenu}>
          <div className={`${styles.inner}`}>
            <a
              href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
              target="_blank"
            >
              <div className={styles.wrapperImg}></div>
            </a>
            <div className={styles.wrapperBtn}>
              <div className={styles.btnSuccess}>
                <a
                  href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                  target="_blank"
                >
                  詳しくはこちら
                </a>
              </div>
              <div className={styles.btnCancel}>
                <a
                  href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                  target="_blank"
                >
                  クイック口座開設
                </a>
              </div>
            </div>
            {/* <div className={styles.footer}>
              <h4>会社情報</h4>
              <p className={styles.title}>
                会社名：Vantage Prime Trading Limited.
              </p>
              <p>住所: 10 Manoel Street , Castries , St.Lucia</p>
              <p>連絡先: support@vantagetradings.com</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
