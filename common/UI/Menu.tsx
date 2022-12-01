import { motion as m } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

import MenuWindow from "./MenuWindow";
import cross from "/public/images/UI/cross.svg";
import s from "/styles/UI/Menu.module.scss";

const Menu = () => {
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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={s.menuButton} onClick={() => setIsOpen(!isOpen)}>
        <m.div
          className={s.menuContainer}
          animate={isOpen ? "open" : "closed"}
          variants={buttonVariants}
        >
          <Image src={cross} alt="menu plus icon" height={35} width={35} />
          <m.div className={s.buttonCircle}></m.div>
        </m.div>
      </button>
    </>
  );
};

export default Menu;
