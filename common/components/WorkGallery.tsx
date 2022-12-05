import { motion as m } from "framer-motion";
import React from "react";

import s from "/styles/Components/WorkGallery.module.scss";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const WorkGallery = ({ children }: Props) => {
  return <m.div className={s.workGallery}>{children}</m.div>;
};

export default WorkGallery;
