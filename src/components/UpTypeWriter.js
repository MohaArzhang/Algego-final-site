import React from "react";
import Typewriter from "typewriter-effect"


function UpTypeWriter() {
  return (
    <div className="upTypeWriter">
      <Typewriter
        options={{
          delay: 100,
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(3000)
            .typeString("De l’idée à la diffusion,<br>ALGEGO a la solution.")
            // .pauseFor(500)
            // .deleteChars(6)
            // .pauseFor(400)
            // .typeString("complice<br>de vos projets")
            .start();
        }}
      />
    </div>
  );
}

export default UpTypeWriter;