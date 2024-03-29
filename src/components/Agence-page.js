import NavigationMenu from "./NavigationMenu"
import { useEffect, useState } from 'react';
import Envelope from '../images/envelope.png'
import AlgegoCircle from '../images/circle.png'
import SEO from './SEO'

export default function AgencePage() {
    const [showMenu, setShowMenu] = useState(false);
    const [agents, setAgent] = useState([]);

    useEffect(() => {
        fetch('https://gestion.contenu.algego.com/wp-json/wp/v2/employe')
            .then(response => response.json())
            .then(data => setAgent(data))
    }, [])

    return (
        <>
            <SEO title='Agence - ALGEGO' description='Découvrez notre équipe multidisciplinaire d’experts de haut niveau. Dans la Vie, il n’y a pas de hasards : il n’y a que des rendez-vous. À quand notre rendez-vous… avec vous ?' language='FR' link='https://algego.com/agence' />
            <div>
                <NavigationMenu showMenu={showMenu} setShowMenu={setShowMenu} />
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 agenceHeaderLeft">
                        <div>
                            Dans la Vie,<br />
                            il n’y a pas de hasards :<br />
                            il n’y a que des rendez-vous…<br />
                        </div>
                        <div>– Paul Éluard</div>
                    </div>
                    <div className="col-xl-6 agenceHeaderRight">
                        <div>
                            <p>
                                Certains croient aux hasards, nous préférons croire aux rendez-vous imprévus que la Vie nous réserve en surprises, ici et là sur notre chemin…
                            </p>
                            <p>
                                C’est ainsi que depuis 2013, l’équipe de ALGEGO est constituée d’une série de rencontres fortuites qui ont donné lieu à des collaborations étonnantes et à des complicités durables… inspirantes.
                            </p>
                            <p>
                                Notre mission : vous accompagner dans vos projets de communication multimédia. De l’idée à la diffusion, en passant par l’élaboration de la stratégie et la production des outils, nos experts vous proposent des solutions innovantes sur mesure.
                            </p>
                            <p>
                                Notre crédo : la Vie est fragile, alors soyons fous (oui mais, bon, sans trop d’excès quand même !), célébrons le présent et, surtout, travaillons dans le plaisir.
                            </p>
                            <p className="agenceHeaderRightLast">
                                Alors, à quand notre rendez-vous… avec vous ?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="agenceTitle">
                    <h1>
                        La vie est trop courte
                    </h1>
                    <h1>
                        pour se prendre au sérieux !
                    </h1>
                </div>
                <div className="agenceSubTitle">
                    (<strong>glissez</strong> la souris ou <strong>cliquez</strong> sur les photos pour en avoir la preuve)
                </div>
            </div>
            <div className="container-fluid agenceMainSection">
                <div className="row">
                    {agents.map((agent, index) => {
                        if (index < 2) {
                            return (
                                <div key={agent.id} className="col-xl-6 col-md-6 agenceImgRow agenceImgRowUp">
                                    <div className={index === 0 ? "agenceImageBW agenceLeftImage" : "agenceImageBW agenceRightImage"}>
                                        <img src={agent.acf.image_blanc_et_noir} alt={agent.acf.nom_de_employe} />
                                    </div>
                                    <div className={index === 0 ? "agenceImageColor agenceLeftImage" : "agenceImageColor agenceRightImage"}>
                                        <img src={agent.acf.image_en_couleur} alt={agent.acf.nom_de_employe} />
                                        <div className="agencePersonTitleAndTag">
                                            <div className="agencePersonTitleWrapper">
                                                <div className="agencePersonTitle">
                                                    <h3>{agent.acf.nom_de_employe}</h3>
                                                    <p>{agent.acf.titre_de_employe_1}</p>
                                                    <p>{agent.acf.titre_de_employe_2}</p>
                                                </div>
                                                <div className="agenceEnvelopeWrapper">
                                                    {agent.acf.adresse_courriel == "" ? (
                                                        <a href="/contactus">
                                                            <img src={Envelope} alt="Envelope" />
                                                        </a>
                                                    ) : (
                                                        <a href={`mailto:${agent.acf.adresse_courriel}`}>
                                                            <img src={Envelope} alt="Envelope" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="agencePersonTag"><div>{agent.acf.hashtag}</div></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className="row">
                    {agents.map((agent, index) => {
                        if (agents.length === 3 && index === 2) {
                            return (
                                <div key={agent.id} className="col-xl-12 col-md-12 agenceImgRow">
                                    <div className="agenceImageBW">
                                        <img src={agent.acf.image_blanc_et_noir} alt={agent.acf.nom_de_employe} />
                                    </div>
                                    <div className="agenceImageColor">
                                        <img src={agent.acf.image_en_couleur} alt={agent.acf.nom_de_employe} />
                                        <div className="agencePersonTitleAndTag">
                                            <div className="agencePersonTitleWrapper">
                                                <div className="agencePersonTitle">
                                                    <h3>{agent.acf.nom_de_employe}</h3>
                                                    <p>{agent.acf.titre_de_employe_1}</p>
                                                    <p>{agent.acf.titre_de_employe_2}</p>
                                                </div>
                                                <div className="agenceEnvelopeWrapper">
                                                    {agent.acf.adresse_courriel == "" ? (
                                                        <a href="/contactus">
                                                            <img src={Envelope} alt="Envelope" />
                                                        </a>
                                                    ) : (
                                                        <a href={`mailto:${agent.acf.adresse_courriel}`}>
                                                            <img src={Envelope} alt="Envelope" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="agencePersonTag"><div>{agent.acf.hashtag}</div></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        if (index >= 2) {
                            return (
                                <div key={agent.id} className="col-xl-6 col-md-6 agenceImgRow">
                                    <div className={index === 2 ? "agenceImageBW agenceLeftImage" : "agenceImageBW agenceRightImage"}>
                                        <img src={agent.acf.image_blanc_et_noir} alt={agent.acf.nom_de_employe} />
                                    </div>
                                    <div className={index === 2 ? "agenceImageColor agenceLeftImage" : "agenceImageColor agenceRightImage"}>
                                        <img src={agent.acf.image_en_couleur} alt={agent.acf.nom_de_employe} />
                                        <div className="agencePersonTitleAndTag">
                                            <div className="agencePersonTitleWrapper">
                                                <div className="agencePersonTitle">
                                                    <h3>{agent.acf.nom_de_employe}</h3>
                                                    <p>{agent.acf.titre_de_employe_1}</p>
                                                    <p>{agent.acf.titre_de_employe_2}</p>
                                                </div>
                                                <div className="agenceEnvelopeWrapper">
                                                    {agent.acf.adresse_courriel == "" ? (
                                                        <a href="/contactus">
                                                            <img src={Envelope} alt="Envelope" />
                                                        </a>
                                                    ) : (
                                                        <a href={`mailto:${agent.acf.adresse_courriel}`}>
                                                            <img src={Envelope} alt="Envelope" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="agencePersonTag"><div>{agent.acf.hashtag}</div></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        } 
                    })}
                </div>
            </div>
            <div className="agenceButtomSection">
                <div className="row">
                    <div className="col-12">
                        <div className="agenceButtomSectionTitle">
                            <h1>Nous créons pour vous</h1>
                            <h1>une équipe d'experts sur mesure</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="agenceButtomSectionTxtWrapper">
                            <div className="agenceButtomSectionTxt">
                                <div className="algegoLogoSmall"><img src={AlgegoCircle} alt='ALGEGO logo' /></div>
                                <p>Consultant événementiel</p>
                            </div>
                            <div className="agenceButtomSectionTxt">
                                <div className="algegoLogoSmall"><img src={AlgegoCircle} alt='ALGEGO logo' /></div>
                                <p>Consultant marketing digital</p>
                            </div>
                            <div className="agenceButtomSectionTxt">
                                <div className="algegoLogoSmall"><img src={AlgegoCircle} alt='ALGEGO logo' /></div>
                                <p>Designer Ul et UX</p>
                            </div>
                            <div className="agenceButtomSectionTxt">
                                <div className="algegoLogoSmall"><img src={AlgegoCircle} alt='ALGEGO logo' /></div>
                                <p>Graphiste-illustrateur</p>
                            </div>
                            <div className="agenceButtomSectionTxt">
                                <div className="algegoLogoSmall"><img src={AlgegoCircle} alt='ALGEGO logo' /></div>
                                <p>Intégrateur StoryLine LMS</p>
                            </div>
                            <div className="agenceButtomSectionTxt">
                                <div className="algegoLogoSmall"><img src={AlgegoCircle} alt='ALGEGO logo' /></div>
                                <p>Journaliste (médias sociaux)</p>
                            </div>
                            <div className="agenceButtomSectionTxt">
                                <div className="algegoLogoSmall"><img src={AlgegoCircle} alt='ALGEGO logo' /></div>
                                <p>Modélisateur et intégrateur 3D</p>
                            </div>
                            <div className="agenceButtomSectionTxt">
                                <div className="algegoLogoSmall"><img src={AlgegoCircle} alt='ALGEGO logo' /></div>
                                <p>Motion designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="agenceButtomSectionTxtWrapper">
                            <div className="agenceButtomSectionTxt">
                                <div className="algegoLogoSmall"><img src={AlgegoCircle} alt='ALGEGO logo' /></div>
                                <p>Photographe</p>
                            </div>
                            <div className="agenceButtomSectionTxt">
                                <div className="algegoLogoSmall"><img src={AlgegoCircle} alt='ALGEGO logo' /></div>
                                <p>Programmeur-analyste web</p>
                            </div>
                            <div className="agenceButtomSectionTxt">
                                <div className="algegoLogoSmall"><img src={AlgegoCircle} alt='ALGEGO logo' /></div>
                                <p>Réalisateur-monteur vidéo</p>
                            </div>
                            <div className="agenceButtomSectionTxt">
                                <div className="algegoLogoSmall"><img src={AlgegoCircle} alt='ALGEGO logo' /></div>
                                <p>Réalisateur <em>motion capture</em></p>
                            </div>
                            <div className="agenceButtomSectionTxt">
                                <div className="algegoLogoSmall"><img src={AlgegoCircle} alt='ALGEGO logo' /></div>
                                <p>Rédacteur</p>
                            </div>
                            <div className="agenceButtomSectionTxt">
                                <div className="algegoLogoSmall"><img src={AlgegoCircle} alt='ALGEGO logo' /></div>
                                <p>Scénariste</p>
                            </div>
                            <div className="agenceButtomSectionTxt">
                                <div className="algegoLogoSmall"><img src={AlgegoCircle} alt='ALGEGO logo' /></div>
                                <p>Technopédagogue</p>
                            </div>
                            <div className="agenceButtomSectionTxt">
                                <div className="algegoLogoSmall"><img src={AlgegoCircle} alt='ALGEGO logo' /></div>
                                <p>Traducteur</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='contactLineTwo' className="contactUsAgence">
                <a href='/contactus'>
                    Jasons ensemble !
                </a>
            </div>
        </>
    )
}