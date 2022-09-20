import Navigation from "./NavigationMenu"

export default function NotFoundPage() {
    return (
        <>
            <Navigation />
            <div className="error">
                <h1>Erreur 404</h1>
                <h1>La page que vous avez demandée n'a pas été trouvée</h1>
            </div>
        </>
    )
}