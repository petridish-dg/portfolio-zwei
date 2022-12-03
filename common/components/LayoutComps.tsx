import React from "react";

import s from "/styles/Components/LayoutComps.module.scss";

type Props = {
  one: string;
  two: string;
  three: string;
};

export function SpreadThree({ one, two, three }: Props) {
  return (
    <div className={s.heroContent}>
      <h3>Chicago, IL</h3>
      <h3>
        Portfolio
        <br /> ( 2020 - 2022 )
      </h3>
      <h3>Sroll to explore ¬</h3>
    </div>
  );
}
