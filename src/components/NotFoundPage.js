import NavigationMenu from "./NavigationMenu"
import React, { useState } from 'react'
import SEO from './SEO'

export default function NotFoundPage() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <SEO title='404 - ALGEGO' description='Description for Not Found page' language='FR' link='https://algego.com/404' />
            <NavigationMenu showMenu={showMenu} setShowMenu={setShowMenu} />
            <div className="error">
                <h1>Erreur 404</h1>
                <h1>La page que vous avez demandée n'a pas été trouvée</h1>
            </div>
        </>
    )
}