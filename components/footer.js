import Image from "next/image";
import Link from "next/link";
import styles from "./css/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.links}>
          <div className={styles.linkContainer}>
            <Link href="/our-services">Services</Link>
            <div className={styles.linkUnderline}></div>
          </div>
          <div className={styles.linkContainer}>
            <Link href="/our-work">Our Work</Link>
            <div className={styles.linkUnderline}></div>
          </div>
          <div className={styles.linkContainer}>
            <Link href="/about">About Us</Link>
            <div className={styles.linkUnderline}></div>
          </div>
          <div className={styles.linkContainer}>
            <Link href="#">Contact Us</Link>
            <div className={styles.linkUnderline}></div>
          </div>
        </div>
        <div className={styles.doubleColumn}>
          <Link href="/" className={styles.logoContainer}>
            <Image
              className={styles.logo}
              src="/rocks-masonry-logo.png"
              alt="logo"
              width={125}
              height={100}
            />
          </Link>
          <div className={styles.textContainer}>
            <p>
              Rocks Masonry and Excavation — <br /> Built on experience. Driven
              by results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
