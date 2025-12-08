"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../3d-design/styles.module.css";
import modalstyles from "../../../components/css/modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
// import dotenv from "dotenv";
// dotenv.config({ path: "../.env" });

export default function ThreeD() {
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
    async function fetchImages() {
      const res = await fetch("http://localhost:3000/api/3d-gallery");
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
              <div
                className={modalstyles.modal_iconContainer}
                onClick={() => setIsActive(!isActive)}
              >
                <FontAwesomeIcon
                  icon={faX}
                  style={{ color: "#1c1c1c" }}
                ></FontAwesomeIcon>
              </div>
              <div className={modalstyles.modal_imgContainer}>
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
            {/* <div className={styles.galleryImage}>
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
            </div> */}
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
      <Footer />
    </>
  );
}
