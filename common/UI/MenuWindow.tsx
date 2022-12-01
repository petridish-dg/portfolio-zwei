import { motion as m } from "framer-motion";
import Link from "next/link";
import React from "react";

import s from "/styles/UI/MenuWindow.module.scss";

const menuLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const MenuWindow = () => {
  return (
    <m.div className={`${s.menuWindowContainer} container`}>
      <div className={s.menuWindowWrapper}>
        <ul className={s.menulinkList}>
          {menuLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.link} className="h1-style">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.menuWindowWrapper}>
        <p>contact</p>
      </div>
    </m.div>
  );
};

export default MenuWindow;
