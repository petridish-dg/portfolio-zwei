import React from "react";

import s from "/styles/components/MiddleDash.module.scss";

type Props = {
  textOne: string;
  children: JSX.Element | JSX.Element[];
};

const MiddleDash = ({ textOne, children }: Props) => {
  return (
    <div className={s.middleDashContainer}>
      <p className={s.middleDashHeader}>{textOne}</p>
      <div className={s.dash} />
      {children}
    </div>
  );
};

export default MiddleDash;
