import { AnimatePresence, motion as m, useScroll } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

import MenuButton from "./MenuButton";
import MenuWindow from "./MenuWindow";
import globe from "/public/images/UI/globe.svg";
import s from "/styles/UI/Navbar.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { scrollYProgress } = useScroll();

  return (
    <>
      <nav className={`${s.navContainer} container`}>
        <div className={s.navLeft}>
          <m.div
            className={s.globe}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          >
            <Image
              src={globe}
              alt="rotating globe icon"
              height={35}
              width={35}
            />
          </m.div>
          <p>
            OPEN FOR ANY
            <br />
            COLLABORATIONS AND OFFERS
          </p>
        </div>
        <div className={s.navRight}>
          <MenuButton menuHandler={() => setIsOpen(!isOpen)} open={isOpen} />
        </div>
      </nav>
      <AnimatePresence>{isOpen && <MenuWindow />}</AnimatePresence>
    </>
  );
};

export default Navbar;
