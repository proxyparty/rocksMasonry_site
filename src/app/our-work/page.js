"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../our-work/styles.module.css";
import modalstyles from "./modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function OurWork() {
  const [isActive, setIsActive] = useState(false);
  const modalClass = isActive
    ? `${modalstyles["modalOn"]} ${modalstyles.modalDisplay}`
    : modalstyles.modalDisplay;
  return (
    <>
      <div className={modalClass}>
        <div className={modalstyles.modal_overlay} />
        <div className={modalstyles.modal_outerContainer}>
          <div className={modalstyles.modal_innerContainer}>
            <div className={modalstyles.modal_iconContainer}>
              <FontAwesomeIcon
                icon={faX}
                style={{ color: "#1c1c1c" }}
              ></FontAwesomeIcon>
            </div>
            <div className={modalstyles.modal_imgContainer}>
              <Image src="/3d_gallery5_image.png" alt="logo" layout="fill" />
            </div>
          </div>
        </div>
      </div>
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
            <div
              className={styles.galleryImage}
              onClick={() => setIsActive(!isActive)}
            >
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
            </div>
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
    </>
  );
}
