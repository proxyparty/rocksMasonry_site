"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../our-work/styles.module.css";
import modalstyles from "../../../components/css/modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
// import dotenv from "dotenv";
// dotenv.config({ path: "./.env" });

export default function OurWork() {
  const [isActive, setIsActive] = useState(false);
  const modalClass = isActive
    ? `${modalstyles["modalOn"]} ${modalstyles.modalDisplay}`
    : modalstyles.modalDisplay;

  const handleChildElementClick = (e) => {
    e.stopPropagation();
    // Do other stuff here
  };

  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    // Fetch images from your JSON file
    // async function fetchImages() {
    //   const res = await fetch("http://localhost:3000/api/gallery");
    //   const data = await res.json();
    //   setImages(data);
    // }
    // fetchImages();

    async function fetchImages() {
      const res = await fetch("https://rocksmasonry.com/api/ourwork-gallery"); // Adjust URL
      if (!res.ok) {
        throw new Error("Failed to fetch images");
      }
      const data = await res.json();
      setImages(data);
    }
    fetchImages();
  }, []);
  const fetchModal = (clickedImg) => {
    setSelectedImage(clickedImg);
    setIsActive(!isActive);
  };
  return (
    <>
      {selectedImage && (
        <div className={modalClass}>
          <div className={modalstyles.modal_overlay} />
          <div
            className={modalstyles.modal_outerContainer}
            onClick={() => setIsActive(!isActive)}
          >
            <div
              className={modalstyles.modal_innerContainer}
              onClick={(e) => handleChildElementClick(e)}
            >
              <div className={modalstyles.modal_imgContainer}>
                <div
                  className={modalstyles.modal_iconContainer}
                  onClick={() => setIsActive(!isActive)}
                >
                  <FontAwesomeIcon
                    icon={faX}
                    style={{ color: "#1c1c1c" }}
                  ></FontAwesomeIcon>
                </div>
                <Image
                  src={selectedImage.secure_url}
                  alt={selectedImage.display_name}
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <Header />
      <div className={styles.outerContainer}>
        <div className={styles.innerContainerA}>
          <div className={styles.slimHero}>
            <h1>Our Work</h1>
            <div className={styles.tint}></div>
            <Image src="/our_work_image.png" alt="logo" layout="fill" />
          </div>
        </div>
        <div className={styles.innerContainerC}>
          <h2 className={styles.sectionTitle}>Gallery</h2>
          <div className={styles.galleryContainer}>
            {images.map((image) => (
              <div
                className={styles.galleryImage}
                key={image.public_id}
                onClick={() => fetchModal(image)}
              >
                <Image
                  src={image.secure_url}
                  alt={image.display_name}
                  layout="fill"
                />
              </div>
            ))}
            {/* <div className={styles.galleryImage} onClick={fetchModal}>
              <Image src="/work_gallery1_image.png" alt="logo" layout="fill" />
            </div>
            <div className={styles.galleryImage}>
              <Image src="/work_gallery2_image.png" alt="logo" layout="fill" />
            </div>
            <div className={styles.galleryImage}>
              <Image src="/work_gallery3_image.png" alt="logo" layout="fill" />
            </div>
            <div className={styles.galleryImage}>
              <Image src="/work_gallery4_image.png" alt="logo" layout="fill" />
            </div>
            <div className={styles.galleryImage}>
              <Image src="/work_gallery5_image.png" alt="logo" layout="fill" />
            </div>
            <div className={styles.galleryImage}>
              <Image src="/work_gallery6_image.png" alt="logo" layout="fill" />
            </div>
            <div className={styles.galleryImage}>
              <Image src="/work_gallery7_image.png" alt="logo" layout="fill" />
            </div>
            <div className={styles.galleryImage}>
              <Image src="/work_gallery8_image.png" alt="logo" layout="fill" />
            </div>
            <div className={styles.galleryImage}>
              <Image src="/work_gallery9_image.png" alt="logo" layout="fill" />
            </div> */}
          </div>
        </div>
        <div className={styles.innerContainerD}>
          <div className={styles.twoColumn}>
            <div className={styles.columnImage}>
              <Image src="/estimate_image.png" alt="logo" layout="fill" />
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
              <Link
                href="https://share.google/VJ6kUpzMYIBS92DVg"
                className={styles.ctaBtn}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
