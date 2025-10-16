import Image from "next/image";
import Link from "next/link";
import styles from "./css/learnmore.module.css";

export default function LearnMore() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainerA}>
        <div className={styles.threecolWrap}>
          <div className={styles.threecolItem}>
            <div className={styles.tint}></div>
            <Image src="/masonry_img.png" alt="logo" layout="fill" />
            <div className={styles.itemTitleWrap}>
              <h1>Masonry</h1>
              <Image src="/arrow_right.png" alt="logo" layout="fill" />
            </div>
          </div>
          <div className={styles.threecolItem}>
            <div className={styles.tint}></div>
            <Image src="/excavation_img.png" alt="logo" layout="fill" />
            <div className={styles.itemTitleWrap}>
              <h1>Excavations</h1>
              <Image src="/arrow_right.png" alt="logo" layout="fill" />
            </div>
          </div>
          <div className={styles.threecolItem}>
            <div className={styles.tint}></div>
            <Image src="/kitchen_img.png" alt="logo" layout="fill" />
            <div className={styles.itemTitleWrap}>
              <h1>Outdoor Kitchens</h1>
              <Image src="/arrow_right.png" alt="logo" layout="fill" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.innerContainerB}>
        <div className={styles.btn}>Learn more</div>
      </div>
    </div>
  );
}
