import React, { useState, useEffect } from 'react'
import LogoImage from '../images/logo-noir.png'


function NavigationMenu(props) {
    const [showLogo, setShowLogo] = useState(true)
    const imageShow = showLogo ? 'logoImageShowMenu' : 'logoImageHide'

    const changeLogoVisibility = () => {
      if (window.scrollY >= 300) {
        setShowLogo(false)
      } else {
        setShowLogo(true)
      }
    }
  
    useEffect(() => {
      changeLogoVisibility()
      window.addEventListener("scroll", changeLogoVisibility)
    })

    let Menu
    const handleMenuClick = () => {
        props.setShowMenu(!props.showMenu)
    }

    let hamburger = ''
    if (props.showMenu) {
        hamburger = 'hamHide'
    } else {
        hamburger = 'hamShowMenu'
    }

    let NavSection =
        <>
            <div className='topSectionNav'>
                <div>
                    <div className='navbar'>
                        <div>
                            <a href='/home'><img className={imageShow} src={LogoImage} /></a>
                        </div>
                        <div className='hamBackMenu' onClick={() => props.setShowMenu(!props.showMenu)}>
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
        <div>
            {NavSection}
            {Menu}
        </div>

    )
}
console.log('this is page nav menu');

export default NavigationMenu