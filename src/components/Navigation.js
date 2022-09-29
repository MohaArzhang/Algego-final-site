import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import LogoImage from '../images/logo-blanc.png'
import BackVideo from './BackVideo'

function Navigation(props) {
  const location = useLocation
  const pageNameClass = location.pathname === '/' ? 'topSection' : 'topSectionNoDelay'

  const [hamColor, setHmaColor] = useState(false)
  const [showLogo, setShowLogo] = useState(true)

  const changeLogoVisibility = () => {
    if (window.scrollY >= window.innerHeight) {
      setShowLogo(false)
    } else {
      setShowLogo(true)
    }
  }

  useEffect(() => {
    changeLogoVisibility()
    window.addEventListener("scroll", changeLogoVisibility)
  })

  const changeHamColor = () => {
    if (window.scrollY >= window.innerHeight) {
      setHmaColor(true)
    } else {
      setHmaColor(false)
    }
  }

  useEffect(() => {
    changeHamColor()
    window.addEventListener("scroll", changeHamColor)
  })

  const imageShow = showLogo ? 'logoImageShow' : 'logoImageHide'

  let Menu

  const handleMenuClick = () => {
    props.setShowMenu(!props.showMenu)
  }

  let hamburger = ''
  if (props.showMenu) {
    hamburger = 'hamHide'
  } else if (hamColor) {
    hamburger = 'hamColor'
  } else {
    hamburger = 'hamShow'
  }

  let ChosenBackVideo = <BackVideo />

  let HamAndVideo =
    <>
      <div className={pageNameClass}>
        {ChosenBackVideo}
        <div>
          <div className='navbar'>
            <div>
              <img className={imageShow} src={LogoImage} alt='Logo ALGEGO'/>
            </div>
            <div className='hamBack' onClick={() => props.setShowMenu(!props.showMenu)}>
              <div className={hamburger}>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
        <div className={props.showMenu ? 'menuBackgroundShow' : 'menuBackgroundHide'}>
        </div>
      </div>
    </>

  if (props.showMenu) {
    Menu =
      <div className='menuContentWrapper'>
        <div className='menuContent'>
          <div id='itemOne' className='menuContentItem' onClick={handleMenuClick}><div className='menuContentItemTxt'><a href='/home'>Accueil</a></div></div>
          <div id='itemTwo' className='menuContentItem' onClick={handleMenuClick}><div className='menuContentItemTxt'><a href='/realisations'>Réalisations</a></div></div>
          <div id='itemThree' className='menuContentItem' onClick={handleMenuClick}><div className='menuContentItemTxt'><a href='/temoignage'>Ce que disent nos clients</a></div></div>
          <div id='itemFour' className='menuContentItem' onClick={handleMenuClick}><div className='menuContentItemTxt'><a href='/agence'>Agence</a></div></div>
          <div id='itemFive' className='menuContentItem' onClick={handleMenuClick}><div className='menuContentItemTxt'><a href='/contactus'>Jasons ensemble !</a></div></div>
        </div>
      </div>
  }

    return (
      <>
        <div>
          {Menu}
          {HamAndVideo}
        </div>
      </>
    )
}

console.log('this is page nav main');


export default Navigation