import Head from "next/head";
import React from "react";

const Seo = ({}) => {
  return (
    <Head>
      <title key="title">Peter De Guzman | Chicago based Designer</title>
      <meta
        key="description"
        name="description"
        content="Peter De Guzman's Portfolio
      ( 2020 - 2022 )"
      />
      <link key="canonical" rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;
