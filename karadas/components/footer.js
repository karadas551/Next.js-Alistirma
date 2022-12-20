import Image from 'next/image';
import styles from '../styles/Home.module.css'

function Footer() {
  return (
      <>
           <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tüm Hakları Saklıdır.{' '}
          <span className={styles.logo}>
            <Image src="/adsız.png" alt="karadas Logo" width={72} height={22} />
          </span>
        </a>
        KARADAS By editör
      </footer>
    </>
  
  );
}

export default Footer;
