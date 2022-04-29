import Head from "next/head";
import React, { useState } from "react";
import aboutStyles from "../styles/About.module.css";

export default function AboutMe() {
  const [imagePath, setImagePath] = useState(1);

  const handleKeyDown = (event) => {
    if(imagePath > 1 && (event.keyCode === 37)) {
      setImagePath(imagePath - 1);
    } 
    
    if(imagePath < 10 && event.keyCode === 39) {
      console.log(imagePath)
      setImagePath(imagePath + 1);
    }
  }

  globalThis.onkeydown = handleKeyDown;
    
  return (
    <>
      <Head>
        <title>Dev LuizF - Sobre mim</title>
        <meta
          name="description"
          content="Um slideshow com um apresentação de quem sou eu"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={aboutStyles.container}>
        <div
          className={aboutStyles.slide}
          style={{
            backgroundImage: `url(/${imagePath}.png)`,
          }}
        ></div>

      </main>
    </>
  );
}
