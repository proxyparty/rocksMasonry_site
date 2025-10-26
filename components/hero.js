import Image from "next/image";
import Link from "next/link";
import styles from "./css/hero.module.css";
import heroImage from "../public/hero-image.png";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.titleWrap}>
          <h1>Rocks Masonry and Excavation</h1>
        </div>
        <div className={styles.textWrap}>
          <p>
            Trusted Excavation, Demolition & Pool Removal Services in Long
            Island
          </p>
        </div>
        <div className={styles.tint}></div>
        <Image src={heroImage} alt="logo" objectFit="cover" fill />
      </div>
      <div className={styles.twoCol}>
        <div className={styles.col}>
          <div className={styles.imageWrap}>
            <Image src="/environmental_icon.png" alt="logo" layout="fill" />
          </div>
          <div className={styles.textWrap}>
            <h1 className={styles.title}>Environmental</h1>
            <p className={styles.desc}>
              At Rocks Masonry, we’re committed to the environment by using
              energy-efficient equipment and recycling materials from our job
              sites.
            </p>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.imageWrap}>
            <Image src="/fully_capable_icon.png" alt="logo" layout="fill" />
          </div>
          <div className={styles.textWrap}>
            <h1 className={styles.title}>Fully Capable</h1>
            <p className={styles.desc}>
              We handle all excavation needs, including new pool digs, pool
              demolition and removal, stock pond construction, and basement
              excavation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
