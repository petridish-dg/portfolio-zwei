import Image from "next/image";
import React from "react";

import lightningL from "/public/images/UI/lightningLeft.svg";
import lightningR from "/public/images/UI/lightningRight.svg";
import s from "/styles/pages/Home.module.scss";

const Home = () => {
  return (
    <section className={`${s.backGround}`}>
      <div className={`${s.heroSection} container`}>
        <h1 className={s.heroTitle}>
          I AM PETER DE GUZMAN
          <br />
          MULTIDISCIPLINARY DESIGNER
        </h1>
        <div className={s.heroSubTitle}>
          <Image src={lightningL} alt="lightning" />
          <h2>
            POWERED BY CURIOSITY
            <br />
            DRIVEN BY DESIGN
          </h2>
          <Image src={lightningR} alt="lightning" />
        </div>
        <div className={s.heroContent}>
          <h3>Chicago, IL</h3>
          <h3>
            Portfolio
            <br /> ( 2020 - 2022 )
          </h3>
          <h3>Sroll to explore ¬</h3>
        </div>
        <div className={s.heroFooter}>
          <p>this is what i do</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
