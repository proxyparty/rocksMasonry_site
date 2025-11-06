"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./css/modal.module.css";
import React, { useState } from "react";

export default function Modal() {
    const [isActive, setIsActive] = useState(false);
    const modalClass = isActive
    ? `${styles["modalOn"]} ${styles.modalContainer}`
    : styles.modalContainer;
  return (
    <div className={modalClass}>
        
    </div>
  );
}
