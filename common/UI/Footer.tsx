import React from "react";

import s from "/styles/UI/Footer.module.scss";

type Props = {
  contain: boolean;
};

const Footer = ({ contain }: Props) => {
  return (
    <footer
      className={`${contain === true ? "container" : ""} ${s.footerContainer}`}
    >
      <div className={s.footerWrapper}>
        <p>
          DESIGNED + DEVELOPED
          <br />
          BY PETER.DG
        </p>
      </div>
      <div className={s.footerWrapper}>
        <p> © 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
