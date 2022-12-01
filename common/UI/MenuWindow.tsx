import { motion as m } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

import MiddleDash from "../components/MiddleDash";
import Footer from "./Footer";
import s from "/styles/UI/MenuWindow.module.scss";

const menuLinks = [
  {
    name: "Home/",
    link: "/",
  },
  {
    name: "Works/",
    link: "/",
  },
  {
    name: "About/",
    link: "/about",
  },
];

const MenuWindow = () => {
  const menuVariants = {
    open: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    closed: {
      y: "0%",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <m.div
      className={`${s.menuWindowContainer} container`}
      variants={menuVariants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      <m.div className={s.menuWindowLockUp}>
        <m.div className={s.menuWindowWrapper}>
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              className={`${s.menuLink} h1-style`}
              href={link.link}
            >
              {link.name}
              <span className="mono">0{index + 1}</span>
            </Link>
          ))}
        </m.div>
        <m.div className={s.menuWindowWrapper}>
          <button>
            <p className="h1-style">
              START A PROJECT <span className="mono">↴</span>
            </p>
          </button>
          <MiddleDash textOne="GET IN TOUCH">
            <p> mail@peterdg.com </p>
          </MiddleDash>
          <m.div className={s.socialLinks}>
            <Link href={"/"}>LINKEDIN</Link>
            <Link href={"/"}>INSTAGRAM</Link>
          </m.div>
        </m.div>
      </m.div>
      <m.div className={s.menuWindowFooter}>
        <Footer contain={false} />
      </m.div>
    </m.div>
  );
};

export default MenuWindow;
