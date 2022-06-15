import { useState, useEffect } from 'react'

function RealisationTitle() {

    const [showRealisationTitle, setRealisationTitle] = useState(false)

    const changeTextVisibility = () => {
        if (window.scrollY >= 3200) {
            setRealisationTitle(false)
        } else {
            setRealisationTitle(true)
        }
    }

    const titleClass = showRealisationTitle ? 'realisationTitleRotateShow' : 'realisationTitleRotateHide'

    useEffect(() => {
        changeTextVisibility()
        window.addEventListener("scroll", changeTextVisibility)
    })

    return (
        <div id='realisationTitleRotateWrapper'>
            <p id={titleClass}>Quelques réalisations</p>
        </div>
    )
}


export default RealisationTitle