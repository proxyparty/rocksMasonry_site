"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faX } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import styles from "./css/header.module.css";
import contactstyles from "./css/contact.module.css";
import React, { useState } from "react";
// import SendEmail from "../src/app/api/send-email/route";
// import dotenv from "dotenv";
// import nodemailer from "nodemailer";
// dotenv.config({ path: "./.env" });

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const hamburgerClass = isActive
    ? `${styles["burgerOn"]} ${styles.hamburgerMenu}`
    : styles.hamburgerMenu;

  const [formActive, setFormActive] = useState(false);
  const formClass = formActive
    ? `${contactstyles["formActive"]} ${contactstyles.formDisplay}`
    : contactstyles.formDisplay;

  const [formHidden, setFormHidden] = useState(false);
  const submittedClass = formHidden
    ? `${contactstyles["submitted"]} ${contactstyles.form}`
    : contactstyles.form;
  const [titleContent, setTitleContent] = useState(
    "Let’s build something great!"
  );
  const [subtitleContent, setSubtitleContent] = useState(
    "Contact our team to answer any questions you may have and claim your free quote!"
  );
  const formSubmitted = () => {
    setTitleContent("We look forward to speaking with you");
    setSubtitleContent(
      "We've received your request and will reach back out to you shortly!"
    );
    setFormHidden(!formHidden);
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: process.env.GMAIL_USER,
  //     pass: process.env.GMAIL_PASS,
  //   },
  // });

  // const mailOptions = {
  //   from: process.env.GMAIL_USER,
  //   to: process.env.GMAIL_USER,
  //   subject: "Testing 12 12",
  //   text: "Yeo",
  // };

  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.error("error", error);
  //   } else {
  //     console.log("Email sent", info.response);
  //   }
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic to send email will go here (e.g., calling an API route)
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email to send:", email);
    console.log("Message:", message);
    // You would typically send this data to a server-side API route
  };
  return (
    <>
      <div className={formClass}>
        <div
          className={contactstyles.overlay}
          onClick={() => setFormActive(!formActive)}
        />
        <div className={contactstyles.icon}>
          <FontAwesomeIcon
            icon={faX}
            style={{ color: "#1c1c1c" }}
            onClick={() => setFormActive(!formActive)}
          ></FontAwesomeIcon>
        </div>
        <div className={contactstyles.formContainer}>
          <div className={contactstyles.content}>
            <p className={contactstyles.title}>{titleContent}</p>
            <p className={contactstyles.subtitle}>{subtitleContent}</p>
            <form onSubmit={handleSubmit} className={submittedClass}>
              <div className={contactstyles.formItem}>
                {/* <label htmlFor="name">Name:</label> */}
                <input
                  type="text"
                  id={contactstyles.name}
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className={contactstyles.formItem}>
                {/* <label htmlFor="phone">Phone:</label> */}
                <input
                  type="tel"
                  id="phone"
                  placeholder="Contact Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className={contactstyles.formItem}>
                {/* <label htmlFor="email">Email:</label> */}
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={contactstyles.formItem}>
                {/* <label htmlFor="message">Message:</label> */}
                <textarea
                  id={contactstyles.message}
                  placeholder="Comments"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className={contactstyles.formItem}>
                <button
                  onClick={formSubmitted}
                  className={contactstyles.btn}
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
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
            <div
              className={styles.btn}
              onClick={() => setFormActive(!formActive)}
            >
              Contact Us
            </div>
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
