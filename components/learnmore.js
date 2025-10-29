import Image from "next/image";
import Link from "next/link";
import styles from "./css/learnmore.module.css";

export default function LearnMore() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainerA}>
        <div className={styles.threecolWrap}>
          <Link href={"/masonry"} className={styles.threecolItem}>
            <div className={styles.tint}></div>
            <Image src="/hero-image.png" alt="logo" layout="fill" />
            <div className={styles.itemTitleWrap}>
              <h1>Masonry</h1>
              <Image src="/arrow_right.png" alt="logo" layout="fill" />
            </div>
          </Link>
          <Link href={"/excavation"} className={styles.threecolItem}>
            <div className={styles.tint}></div>
            <Image src="/excavation_img.png" alt="logo" layout="fill" />
            <div className={styles.itemTitleWrap}>
              <h1>Excavations</h1>
              <Image src="/arrow_right.png" alt="logo" layout="fill" />
            </div>
          </Link>
          <Link href={"/3d-design"} className={styles.threecolItem}>
            <div className={styles.tint}></div>
            <Image src="/3drendering_image.png" alt="logo" layout="fill" />
            <div className={styles.itemTitleWrap}>
              <h1>3D Design</h1>
              <Image src="/arrow_right.png" alt="logo" layout="fill" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
