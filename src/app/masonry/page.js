import Image from "next/image";
import Link from "next/link";
import styles from "../masonry/styles.module.css";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

export default function Masonry() {
  return (
    <>
      <Header />
      <div className={styles.outerContainer}>
        <div className={styles.innerContainerA}>
          <div className={styles.slimHero}>
            <p>Masonry</p>
            <div className={styles.tint}></div>
            <Image
              src="/masonry_hero_image.png"
              alt="logo"
              sizes="100vw"
              layout="fill"
            />
          </div>
        </div>
        <div className={styles.innerContainerB}>
          <div className={styles.twoColumn}>
            <div className={styles.columnImage}>
              <Image src="/masonry_pool_image.png" alt="logo" layout="fill" />
            </div>
            <div className={styles.columnText}>
              <h1>Pool Patios & Renovations</h1>
              <p>
                Upgrade your backyard oasis with a custom pool patio or a full
                renovation. Our team designs and builds stunning pool surrounds
                that combine comfort, safety, and style.
              </p>
            </div>
          </div>
          <div className={`${styles.twoColumn} ${styles.reverse}`}>
            <div className={styles.columnImage}>
              <Image
                src="/masonry_waterfalls_image.png"
                alt="logo"
                layout="fill"
              />
            </div>
            <div className={styles.columnText}>
              <h1>Sheer Descent Waterfalls</h1>
              <p>
                Add a touch of elegance and tranquility with a sheer descent
                waterfall. These sleek, modern water features bring movement,
                sound, and luxury to any pool or patio design.
              </p>
            </div>
          </div>
          <div className={styles.twoColumn}>
            <div className={styles.columnImage}>
              <Image src="/masonry_patios_image.png" alt="logo" layout="fill" />
            </div>
            <div className={styles.columnText}>
              <h1>Patios, Walkways & Driveways</h1>
              <p>
                Whether you’re looking for a welcoming front walkway or a
                spacious backyard patio, we deliver precision craftsmanship and
                top-quality materials designed to last. Our custom driveways add
                curb appeal while standing up to everyday wear.
              </p>
            </div>
          </div>
          <div className={`${styles.twoColumn} ${styles.reverse}`}>
            <div className={styles.columnImage}>
              <Image src="/masonry_stoops_image.png" alt="logo" layout="fill" />
            </div>
            <div className={styles.columnText}>
              <h1>Retaining Walls & Stoops</h1>
              <p>
                We build strong, attractive retaining walls and stoops that
                provide both structure and beauty. Every project is engineered
                for long-term stability and seamless integration with your
                landscape.
              </p>
            </div>
          </div>
          <div className={styles.twoColumn}>
            <div className={styles.columnImage}>
              <Image
                src="/masonry_firepit_image.png"
                alt="logo"
                layout="fill"
              />
            </div>
            <div className={styles.columnText}>
              <h1>Firepits & Sunken Firepit Areas</h1>
              <p>
                Create a cozy, inviting space for year-round gatherings with a
                custom firepit or sunken firepit area. Enjoy evenings outdoors
                with warmth, ambiance, and style.
              </p>
            </div>
          </div>
          <div className={`${styles.twoColumn} ${styles.reverse}`}>
            <div className={styles.columnImage}>
              <Image
                src="/masonry_kitchens_image.png"
                alt="logo"
                layout="fill"
              />
            </div>
            <div className={styles.columnText}>
              <h1>Outdoor Kitchens</h1>
              <p>
                Take your backyard entertaining to the next level with a fully
                equipped outdoor kitchen. We design and install everything from
                built-in grills to countertops and storage for a complete
                outdoor living experience.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.innerContainerC}>
          <div className={styles.twoColumn}>
            <div className={styles.columnImage}>
              <Image
                src="/masonry_estimate_image.png"
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
      <Footer />
    </>
  );
}
