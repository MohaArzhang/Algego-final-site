import React, { useState } from 'react'
import Typewriter from "typewriter-effect"
import Play from "../images/play.png"
import Dialog from '@mui/material/Dialog'
import { IconButton, Toolbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function UpTypeWriter() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
        <div className="firstButton" onClick={handleClickOpen}>
          ALGEGO en 60 secondes
          <img src={Play} alt='Play icon'></img>
        </div>
        <div className="firstButton"><a href="/Temoignage">Ce que disent nos clients<img src={Play} alt='Play icon'></img></a></div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        transitionDuration={1000}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close">
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <div className='video60Secondes'>
          <iframe src="https://player.vimeo.com/video/840513688?h=c77086c6b2" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
      </Dialog>
    </>
  );
}

export default UpTypeWriter;