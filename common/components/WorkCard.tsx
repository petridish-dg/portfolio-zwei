import { motion as m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import s from "/styles/Components/WorkCard.module.scss";

type Props = {
  image: string;
  title: string;
  scope: Array<string>;
  description: string;
  link: string;
};

const WorkCard = ({ image, title, scope, description, link }: Props) => {
  const cardVariants = {};

  return (
    <Link href={"/"} className={s.cardContainer}>
      <div className={s.cardImageContainer}>
        <Image src={image} alt={title} fill={true} className={s.cardImage} />
        <div className={s.scopeContainer}>
          {scope.map((item, index) => (
            <div className={s.scope} key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className={s.cardTitle}>
        <h2>{title}</h2>
      </div>

      <p>{description}</p>
    </Link>
  );
};

export default WorkCard;
