import { Variants, motion as m } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

import MenuWindow from "./MenuWindow";
import cross from "/public/images/UI/cross.svg";
import s from "/styles/UI/Menu.module.scss";

type Props = {
  open: boolean;
  menuHandler: () => void;
};

const MenuButton = ({ open, menuHandler }: Props) => {
  const buttonVariants: Variants = {
    open: {
      rotate: -135,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const circleVariants: Variants = {
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

  return (
    <button className={s.menuButton} onClick={menuHandler}>
      <m.div
        className={s.menuContainer}
        animate={open ? "open" : "closed"}
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
  );
};

export default MenuButton;
