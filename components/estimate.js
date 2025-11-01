import Image from "next/image";
import Link from "next/link";
import styles from "./css/estimate.module.css";

export default function Estimate() {
  return (
    <div className={styles.container}>
      <div className={styles.twoColumn}>
        <div className={styles.columnImage}>
          <Image src="/estimate_image.png" alt="logo" layout="fill" />
        </div>
        <div className={styles.columnText}>
          <h1>Get Your Free Estimate Today</h1>
          <p>
            Whether you’re planning a pool demolition, backyard transformation,
            foundation excavation, or land clearing project, Rocks Masonry and
            Excavation is your trusted local expert.
          </p>
          <p>
            Call us today for a <b>FREE</b> estimate:
          </p>
          <div className={styles.ctaContainer}>
            <div className={styles.ctaIcon}>
              <Image src="/phone_icon.png" alt="logo" layout="fill" />
            </div>
            <Link href={"tel:+6314451231"}>
              <b>631-445-1231</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
