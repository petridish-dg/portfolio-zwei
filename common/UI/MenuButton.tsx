import { motion as m } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

import MenuWindow from "./MenuWindow";
import cross from "/public/images/UI/cross.svg";
import s from "/styles/UI/Menu.module.scss";

type Props = {
  isOpen: boolean;
  setIsOpen: Function;
};

const MenuButton = ({ isOpen, setIsOpen }: Props) => {
  const buttonVariants = {
    open: {
      rotate: 135,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    closed: {
      rotate: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const circleVariants = {
    grow: {
      height: "20px",
      width: "20px",
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
        ease: "linear",
      },
    },
  };

  const menuHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={s.menuButton} onClick={menuHandler}>
        <m.div
          className={s.menuContainer}
          animate={isOpen ? "open" : "closed"}
          variants={buttonVariants}
        >
          <Image src={cross} alt="menu plus icon" height={35} width={35} />
          <m.div
            className={s.buttonCircle}
            variants={circleVariants}
            animate="grow"
          ></m.div>
        </m.div>
      </button>
    </>
  );
};

export default MenuButton;
