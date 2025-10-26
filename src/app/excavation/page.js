import Image from "next/image";
import Link from "next/link";
import styles from "../excavation/styles.module.css";

export default function Excavation() {
  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainerA}>
          <div className={styles.slimHero}>
            <p>Excavation</p>
            <div className={styles.tint}></div>
            <Image
              src="/personal_services_image.png"
              alt="logo"
              sizes="100vw"
              layout="fill"
            />
          </div>
        </div>
        <div className={styles.innerContainerB}>
          <div className={styles.twoColumn}>
            <div className={styles.columnImage}>
              <Image src="/pool_removal_image.jpg" alt="logo" layout="fill" />
            </div>
            <div className={styles.columnText}>
              <h1>Swimming Pool Demolition & Removal</h1>
              <p>
                Thinking of removing your old pool? We specialize in{" "}
                <b>gunite</b>, <b>vinyl</b>, and{" "}
                <b>concrete pool demolitions</b>. Our team provides safe, fast,
                and clean pool removal services that prepare your yard for a
                fresh new look.
              </p>
            </div>
          </div>
          <div className={`${styles.twoColumn} ${styles.reverse}`}>
            <div className={styles.columnImage}>
              <Image
                src="/house_foundations_image.png"
                alt="logo"
                layout="fill"
              />
            </div>
            <div className={styles.columnText}>
              <h1>House Foundations & Excavation</h1>
              <p>
                We deliver precise, reliable <b>foundation excavation</b> for
                new home builds and additions. With <b>advanced equipment</b>{" "}
                and <b>experienced operators</b>, we ensure a solid start for
                your construction project.
              </p>
            </div>
          </div>
          <div className={styles.twoColumn}>
            <div className={styles.columnImage}>
              <Image src="/land_clearing_image.png" alt="logo" layout="fill" />
            </div>
            <div className={styles.columnText}>
              <h1>Land Clearing & Backyard Leveling</h1>
              <p>
                From residential backyards to commercial lots,{" "}
                <b>we clear and level properties</b> to make room for patios,
                landscaping, or new builds.
              </p>
            </div>
          </div>
          <div className={`${styles.twoColumn} ${styles.reverse}`}>
            <div className={styles.columnImage}>
              <Image src="/cesspools_image.png" alt="logo" layout="fill" />
            </div>
            <div className={styles.columnText}>
              <h1>Cesspools & Drainage Systems</h1>
              <p>
                We provide professional <b>cesspool installation</b>,{" "}
                <b>repairs</b>, and <b>drainage excavation</b> to keep your
                property safe and compliant.
              </p>
            </div>
          </div>
          <div className={styles.twoColumn}>
            <div className={styles.columnImage}>
              <Image src="/dirt_removal_image.png" alt="logo" layout="fill" />
            </div>
            <div className={styles.columnText}>
              <h1>Dirt & Concrete Removal</h1>
              <p>
                Get rid of unwanted dirt, rocks, and concrete without the
                hassle. <b>We handle all hauling and disposal</b>, leaving your
                space clean and ready for the next phase.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.innerContainerC}>
          <div className={styles.twoColumn}>
            <div className={styles.columnImage}>
              <Image
                src="/excavation_estimate_image.png"
                alt="logo"
                layout="fill"
              />
            </div>
            <div className={styles.columnText}>
              <h1>Get Your Estimate Today</h1>
              <p>
                Whether you’re planning a pool demolition, backyard
                transformation, foundation excavation, or land clearing project,
                Rocks Masonry and Excavation is your trusted local expert.
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
        <div className={styles.innerContainerD}>
          <Link href={"/our-work"} className={styles.btn}>
            View Our Work
          </Link>
        </div>
      </div>
    </>
  );
}
