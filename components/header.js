import Image from "next/image";
import Link from "next/link";
import styles from "./css/header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.twoColumn}>
        <Link href="/" className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src="/rocks-masonry-logo.png"
            alt="logo"
            width={125}
            height={100}
          />
        </Link>
        <div className={styles.links}>
          <div className={styles.linkContainer}>
            <Link href="/services">Services</Link>
            <div className={styles.linkUnderline}></div>
          </div>
          <div className={styles.linkContainer}>
            <Link href="/work">Our Work</Link>
            <div className={styles.linkUnderline}></div>
          </div>
          <div className={styles.linkContainer}>
            <Link href="/about">About Us</Link>
            <div className={styles.linkUnderline}></div>
          </div>
          <Link className={styles.btn} href="#">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
