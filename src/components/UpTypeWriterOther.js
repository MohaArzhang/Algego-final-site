import React from "react";
import Typewriter from "typewriter-effect"
import Play from "../images/play.png"


function UpTypeWriterTwo() {
  return (
    <>
      <div className="upTypeWriter">
        <Typewriter
          options={{
            delay: 100,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Partenaire de vos")
              .pauseFor(200)
              .deleteChars(6)
              .pauseFor(200)
              .typeString("complice de vos projets")
              .start();
          }}
        />
        <div className="firstButton"><a href="/Temoignage">Ce que disent nos clients<img src={Play}></img></a></div>
      </div>
    </>
  );
}

export default UpTypeWriterTwo;