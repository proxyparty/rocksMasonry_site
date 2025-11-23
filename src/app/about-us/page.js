import Image from "next/image";
import Link from "next/link";
import styles from "../about-us/styles.module.css";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

export default function AboutUs() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.innerContainerA}>
          <div className={styles.slimHero}>
            <h1>About Us</h1>
            <div className={styles.tint}></div>
            <Image
              src="/hero_group_image.jpg"
              alt="logo"
              layout="fill"
              sizes="100vw"
            />
          </div>
        </div>
        <div className={styles.innerContainerB}>
          <div className={styles.imageContainer}>
            <Image src="/owner_a_image.jpg" alt="logo" layout="fill" />
          </div>
          <div className={styles.imageContainer}>
            <Image src="/owner_b_image.jpg" alt="logo" layout="fill" />
          </div>
        </div>
        <div className={styles.innerContainerC}>
          <p>
            For over 20 years, our family-owned masonry and excavation
            company has proudly served Long Island and the greater New York
            area, building beautiful, long-lasting outdoor spaces that our
            clients love. What started as a small family operation has grown
            into one of Long Island’s most trusted masonry and excavation
            companies, known for exceptional craftsmanship, reliability, and
            personal service.
          </p>
        </div>
        <div className={styles.innerContainerD}>
          <div className={styles.imageContainer}>
            <Image src="/group_image.jpg" alt="logo" layout="fill" />
          </div>
        </div>
        <div className={styles.innerContainerE}>
          <p>
            We believe in doing things the right way — with honesty, precision,
            and pride in every project. Our experienced team is large enough to
            complete projects quickly and efficiently, yet we remain hands-on
            and detail-oriented, ensuring every client feels like part of our
            family.
          </p>
          <p>
            From custom patios and outdoor kitchens to firepits, retaining
            walls, and pool renovations, we approach every job with the same
            passion and dedication that has defined us for two decades.{" "}
            <b>Our mission is simple:</b> to turn your vision into a space
            you’ll enjoy for years to come, combining timeless design with the
            quality and care that make us stand out as one of the best masonry
            and excavation companies in Long Island, NY.
          </p>
        </div>
        <div className={styles.innerContainerF}>
          <Link className={styles.btn} href={"/masonry"}>
            View Our Masonry
          </Link>
          <Link className={styles.btn} href={"/excavation"}>
            View Our Excavation
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
