import { motion as m } from "framer-motion";
import Link from "next/link";
import React from "react";
import Footer from "./Footer";

import s from "/styles/UI/MenuWindow.module.scss";

const menuLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Works",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
];

const MenuWindow = () => {
  return (
    <m.div className={`${s.menuWindowContainer} container`}>
      <div className={s.menuWindowLockUp}>
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
      </div>
      <Footer />
    </m.div>
  );
};

export default MenuWindow;
