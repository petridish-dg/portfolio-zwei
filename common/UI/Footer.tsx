import React from "react";

import s from "/styles/UI/Footer.module.scss";

type Props = {
  contain: string;
};

const Footer = ({ contain }: Props) => {
  return (
    <footer className={contain === "true" ? "container" : ""}>
      <div className={s.footerWrapper}>
        <p>
          © 2022
          <br />
          DESIGNED + DEVELOPED BY PETER.DG
        </p>
      </div>
      <div className={s.footerWrapper}></div>
    </footer>
  );
};

export default Footer;
