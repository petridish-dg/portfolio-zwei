import { motion as m } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

import MiddleDash from "../components/MiddleDash";
import Footer from "./Footer";
import s from "/styles/UI/MenuWindow.module.scss";

const MotionLink = m(Link);

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
    closed: {
      y: "-100vh",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        // when: "afterChildren",
        staggerChildren: 0.2,
      },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const linkContainerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const FooterVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
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
        <m.div className={s.menuWindowWrapper} variants={linkContainerVariants}>
          {menuLinks.map((link, index) => (
            <MotionLink
              className={`${s.menuLink} h1-style`}
              key={index}
              href={link.link}
              whileHover={{ x: 10 }}
              variants={linkVariants}
            >
              {link.name}
              <span className="mono">0{index + 1}</span>
            </MotionLink>
          ))}
        </m.div>
        <m.div className={s.menuWindowWrapper} variants={linkVariants}>
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
      <m.div className={s.menuWindowFooter} variants={FooterVariants}>
        <Footer contain={false} />
      </m.div>
    </m.div>
  );
};

export default MenuWindow;
