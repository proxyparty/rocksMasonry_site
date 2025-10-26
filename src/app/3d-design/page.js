import Image from "next/image";
import Link from "next/link";
import styles from "../3d-design/styles.module.css";

export default function ThreeD() {
  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainerA}>
          <div className={styles.slimHero}>
            <h1>3D Design Services</h1>
            <div className={styles.tint}></div>
            <Image src="/3d_hero_image.png" alt="logo" layout="fill" />
          </div>
        </div>
        <div className={styles.innerContainerB}>
          <div className={styles.twoColumn}>
            <div className={styles.columnImage}>
              <Image src="/3d_rendering_image.png" alt="logo" layout="fill" />
            </div>
            <div className={styles.columnText}>
              <h1>3D Rendering</h1>
              <p>
                We offer professional 3D design services to help you visualize
                your project before construction begins. You can purchase a 3D
                design to see exactly how your space will look — and if you
                choose to move forward with us, the design cost is credited
                toward your project total.
              </p>
              <i>That means your 3D design is free when you proceed with us!</i>
            </div>
          </div>
        </div>
        <div className={styles.innerContainerC}>
          <div className={styles.galleryContainer}>
            <div className={styles.galleryImage}>
              <Image src="/3d_gallery1_image.png" alt="logo" layout="fill" />
            </div>
            <div className={styles.galleryImage}>
              <Image src="/3d_gallery2_image.png" alt="logo" layout="fill" />
            </div>
            <div className={styles.galleryImage}>
              <Image src="/3d_gallery3_image.png" alt="logo" layout="fill" />
            </div>
            <div className={styles.galleryImage}>
              <Image src="/3d_gallery4_image.png" alt="logo" layout="fill" />
            </div>
            <div className={styles.galleryImage}>
              <Image src="/3d_gallery5_image.png" alt="logo" layout="fill" />
            </div>
            <div className={styles.galleryImage}>
              <Image src="/3d_gallery6_image.png" alt="logo" layout="fill" />
            </div>
          </div>
        </div>
        <div className={styles.innerContainerD}>
          <Link
            href={"https://share.google/VJ6kUpzMYIBS92DVg"}
            className={styles.btn}
          >
            Contact Us!
          </Link>
        </div>
      </div>
    </>
  );
}
