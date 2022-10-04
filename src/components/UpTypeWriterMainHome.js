import React from "react";
import Typewriter from "typewriter-effect"
import Play from "../images/play.png"


function UpTypeWriter() {
  return (
    <>
      <div className="upTypeWriter">
        <Typewriter
          // options={{
          //   delay: 100,
          // }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2800)
              .typeString("Partenaire de vos")
              .pauseFor(200)
              .deleteChars(6)
              .pauseFor(200)
              .typeString("complice de vos projets")
              .start();
          }}
        />
        <div className="firstButton"><a href="/Temoignage">Ce que disent nos clients<img src={Play} alt='Play icon'></img></a></div>
      </div>
    </>
  );
}

export default UpTypeWriter;