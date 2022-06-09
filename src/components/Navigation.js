import React, { useState, useEffect } from 'react'
import BackgroundVideo from './Backgroundvideo'
import LogoImage from '../images/logo-blanc.png'
import UpTypeWriter from '../components/UpTypeWriter'


function Navigation() {
  const [showMenu, setShowMenu] = useState(false)
  const [hamColor, setHmaColor] = useState(false)
  const [showLogo, setShowLogo] = useState(true)

  const changeLogoVisibility = () => {
    if (window.scrollY >= 1100) {
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
    if (window.scrollY >= 1100) {
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
  const Logo = () => {
    return (
      <>
        <img className={`logoImage ${imageShow}`} src={LogoImage} />
      </>
    )
  }

  const handleMenuClick = () => {
    setShowMenu(!showMenu)
  }

  let hamburger = ''
  if (showMenu) {
    hamburger = 'hamHide'
  } else if (hamColor) {
    hamburger = 'hamColor'
  } else {
    hamburger = 'hamShow'
  }

  let HamAndVideo =
    <>
      <div className='topSection'>
        <div>
          <div className='navbar'>
            <div>
              <Logo />
            </div>
            <div onClick={() => setShowMenu(!showMenu)}>
              <div className={hamburger}>
                &nbsp;
              </div>
            </div>
          </div>
          <div>
            <BackgroundVideo />
          </div>
        </div>
        <div>
          <UpTypeWriter />
        </div>
        <div className={showMenu ? 'menuBackgroundShow' : 'menuBackgroundHide'}>
        </div>

      </div>
    </>
  if (showMenu) {
    Menu =
      <div className='menuContent'>
        <a href='#'><div className='menuContentItem'><div className='menuContentItemTxt'>Accueil</div></div></a>
        <div className='menuContentItem' onClick={handleMenuClick}><div className='menuContentItemTxt'>Quelques réalisations</div></div>
        <div className='menuContentItem'><div className='menuContentItemTxt'>Jasons ensemble !</div></div>
        <div className='menuContentItem'><div className='menuContentItemTxt'>Nos clients</div></div>

      </div>
  }

  return (
    <div>
      {Menu}
      {HamAndVideo}
    </div>

  )
}

export default Navigation