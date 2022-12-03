import Image from "next/image";
import React from "react";

import { SpreadThree } from "../common/components/LayoutComps";
import lightningL from "/public/images/UI/lightningLeft.svg";
import lightningR from "/public/images/UI/lightningRight.svg";
import s from "/styles/pages/Home.module.scss";

const Home = () => {
  const heroContent = {
    one: "Chicago, IL",
    two: "Portfolio ( 2020 - 2022 )",
    three: "Scroll to explore ¬",
  };

  return (
    <>
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
          <SpreadThree {...heroContent} />
          <div className={s.heroFooter}>
            <p>this is what i do</p>
          </div>
        </div>
      </section>
      <section className={s.aboutSection}>
        <div className="container">
          <h1>ABOUT</h1>
        </div>
      </section>
    </>
  );
};

export default Home;
