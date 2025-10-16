import Image from "next/image";
import Link from "next/link";
import styles from "../our-work/styles.module.css";

export default function OurWork() {
  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainerA}>
          <div className={styles.slimHero}>
            <p>Our Work</p>
            <div className={styles.tint}></div>
            <Image src="/our_work_image.png" alt="logo" layout="fill" />
          </div>
        </div>
      </div>
    </>
  );
}
