"use client";
// header
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import styles from "./css/header.module.css";
import React, { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const hamburgerClass = isActive
    ? `${styles["burgerOn"]} ${styles.hamburgerMenu}`
    : styles.hamburgerMenu;
  return (
    <>
      <div className={styles.container}>
        <div
          className={`${styles.twoColumn}`}
          style={{ animationDelay: ".5s" }}
        >
          <Link href="/" className={styles.logoContainer}>
            <Image
              className={styles.logo}
              src="/rocks-masonry-logo.png"
              alt="logo"
              width={125}
              height={100}
            />
          </Link>
          <div className={styles.links}>
            <div className={styles.linkContainer}>
              <div className={styles.dropDownNavBtn}>
                <p>Services</p>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ color: "#1c1c1c" }}
                ></FontAwesomeIcon>
                <div className={styles.dropDownContainer}>
                  <div className={styles.dropDownText}>
                    <Link href={"/masonry"}>Masonry</Link>
                    <Link href={"/excavation"}>Excavation</Link>
                    <Link href={"/3d-design"}>3D Rendering</Link>
                  </div>
                </div>
              </div>
              <div className={styles.linkUnderline}></div>
            </div>
            <div className={styles.linkContainer}>
              <Link href="/our-work">Our Work</Link>
              <div className={styles.linkUnderline}></div>
            </div>
            <div className={styles.linkContainer}>
              <Link href="/about-us">About Us</Link>
              <div className={styles.linkUnderline}></div>
            </div>
            <Link
              className={styles.btn}
              href="https://share.google/VJ6kUpzMYIBS92DVg"
            >
              Contact Us
            </Link>
          </div>
          <div
            onClick={() => setIsActive(!isActive)}
            className={styles.hamburgerContainer}
          >
            <div className={`${styles.hamburger} ${styles.topBun}`} />
            <div className={`${styles.hamburger} ${styles.beef}`} />
            <div className={`${styles.hamburger} ${styles.bottomBun}`} />
          </div>
        </div>
        <div className={hamburgerClass}>
          <div
            onClick={() => setIsActive(!isActive)}
            className={styles.crossburgerContainer}
          >
            <div className={`${styles.crossburger} ${styles.topBun}`} />
            <div className={`${styles.crossburger} ${styles.bottomBun}`} />
          </div>
          <div className={styles.linkContainer}>
            <Image
              className={styles.logo}
              src="/rocks-masonry-logo.png"
              alt="logo"
              width={125}
              height={100}
            />
            <Link onClick={() => setIsActive(!isActive)} href={"/masonry"}>
              Masonry
            </Link>
            <Link onClick={() => setIsActive(!isActive)} href={"/excavation"}>
              Excavation
            </Link>
            <Link onClick={() => setIsActive(!isActive)} href={"/3d-design"}>
              3D Design Services
            </Link>
            <Link onClick={() => setIsActive(!isActive)} href={"/our-work"}>
              Our Work
            </Link>
            <Link onClick={() => setIsActive(!isActive)} href={"/about-us"}>
              About Us
            </Link>
            <Link
              onClick={() => setIsActive(!isActive)}
              href={"https://share.google/VJ6kUpzMYIBS92DVg"}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
