import Image from "next/image";
import Link from "next/link";
import styles from "./css/chooseus.module.css";

export default function ChooseUs() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.titleContainer}>
          <h1>Why Long Island Homeowners & Contractors Choose Us</h1>
        </div>
        <div className={styles.badgeContainer}>
          {/* Start | Years of Experience | Piece */}
          <div className={styles.badge2Col}>
            <div className={styles.badgeImage}>
              <Image
                src="/20years_icon.png"
                alt="logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.badgeText}>
              <h2>Years Of Experience</h2>
              <p>A trusted name in Long Island excavation and demolition.</p>
            </div>
          </div>
          {/* End | Years of Experience | Piece */}
          {/* Start | Licensed and Insured | Piece */}
          <div className={styles.badge2Col}>
            <div className={styles.badgeImage}>
              <Image
                src="/licensed_icon.png"
                alt="logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.badgeText}>
              <h2>Licensed & Insured</h2>
              <p>
                We handle all required permits and inspections for your project.
              </p>
            </div>
          </div>
          {/* End | Licensed and Insured | Piece */}
          {/* Start | Modern Equipment | Piece */}
          <div className={styles.badge2Col}>
            <div className={styles.badgeImage}>
              <Image
                src="/modernEquipment_icon.png"
                alt="logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.badgeText}>
              <h2>Modern Equipment</h2>
              <p>
                State-of-the-art machinery operated by skilled professionals.
              </p>
            </div>
          </div>
          {/* End | Modern Equipment | Piece */}
          {/* Start | Modern Equipment | Piece */}
          <div className={styles.badge2Col}>
            <div className={styles.badgeImage}>
              <Image
                src="/residential_icon.png"
                alt="logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.badgeText}>
              <h2>Residential & Commercial</h2>
              <p>No job is too big or too small.</p>
            </div>
          </div>
          {/* End | Modern Equipment | Piece */}
          {/* Start | Modern Equipment | Piece */}
          <div className={styles.badge2Col}>
            <div className={styles.badgeImage}>
              <Image
                src="/reliable_icon.png"
                alt="logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.badgeText}>
              <h2>Fast & Reliable Service</h2>
              <p>We deliver on time, every time.</p>
            </div>
          </div>
          {/* End | Modern Equipment | Piece */}
          {/* Start | Modern Equipment | Piece */}
          <div className={styles.badge2Col}>
            <div className={styles.badgeImage}>
              <Image
                src="/estimates_icon.png"
                alt="logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.badgeText}>
              <h2>Free Estimates</h2>
              <p>Transparent pricing with no hidden fees.</p>
            </div>
          </div>
          {/* End | Modern Equipment | Piece */}
        </div>
        {/* Start | Serving Suffolk and Nassau County | Section */}
        <div className={styles.countyContainer}>
          <div className={styles.countyText}>
            <h1>Serving Suffolk County & Nassau County</h1>
            <p>
              We proudly serve homeowners, contractors, and businesses across{" "}
              <b>Suffolk County, NY, Nassau County, NY</b> and the{" "}
              <b>surrounding Long Island areas</b>
            </p>
          </div>
          <div className={styles.countyImage}>
            <Image
              src="/longIsland_icon.png"
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        {/* End | Serving Suffolk and Nassau County | Section */}
      </div>
    </div>
  );
}
