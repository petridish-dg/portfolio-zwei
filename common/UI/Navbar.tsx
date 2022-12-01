import { motion as m } from "framer-motion";
import Image from "next/image";
import React from "react";
import { ModuleDetectionKind } from "typescript";

import Menu from "./Menu";
import MenuWindow from "./MenuWindow";
import globe from "/public/images/UI/globe.svg";
import s from "/styles/UI/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={`${s.navContainer} container`}>
      <div className={s.navLeft}>
        <m.div
          className={s.globe}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        >
          <Image src={globe} alt="rotating globe icon" height={35} width={35}/>
        </m.div>
        <p>
          OPEN FOR ANY
          <br />
          COLLABOORATIONS AND OFFERS
        </p>
      </div>
      <div className={s.navRight}>
        <Menu />
      </div>
        <MenuWindow/>
    </nav>
  );
};

export default Navbar;
