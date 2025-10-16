import Image from "next/image";
import Link from "next/link";
import styles from "./css/experience.module.css";

export default function Experience() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.textWrap}>
          <div className={styles.titleWrap}>
            <h1>
              The most reliable excavation and demolition company in Suffolk and
              Nassau County, NY
            </h1>
          </div>
          <div className={styles.descWrap}>
            <p>
              At Rocks Masonry and Excavation, we bring over 20 years of proven
              experience in delivering professional, safe, and efficient
              services. From pool removals and house foundations to land
              clearing and backyard leveling, we handle every project with
              precision, permits, and inspections — guaranteed.
            </p>
          </div>
        </div>
        <div className={styles.imageWrap}>
          <Image src="/20years_experience.png" alt="logo" layout="fill" />
        </div>
      </div>
    </div>
  );
}
