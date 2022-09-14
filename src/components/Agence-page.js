import NavigationMenu from "./NavigationMenu"
import React, { useState } from 'react'
import Envelope from '../images/envelope.png'
import AlgegoCircle from '../images/circle.png'
import Daniel from '../images/agence/Daniel.jpg'
import DanielColor from '../images/agence/Daniel_color.jpg'
import Antoine from '../images/agence/Antoine.jpg'
import AntoineColor from '../images/agence/Antoine_color.jpg'
import Maxime from '../images/agence/Maxime.jpg'
import MaximeColor from '../images/agence/Maxime_color.jpg'
import Julie from '../images/agence/Julie.jpg'
import JulieColor from '../images/agence/Julie_color.jpg'
import Moha from '../images/agence/Moha.jpg'
import MohaColor from '../images/agence/Moha_color.jpg'

export default function AgencePage() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
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
                        {/* LA VIE EST TROP COURTE POUR */}
                        La vie est trop courte
                    </h1>
                    <h1>
                        {/* SE PRENDRE AU SÉRIEUX ! */}
                        pour se prendre au sérieux !
                    </h1>
                </div>
                <div className="agenceSubTitle">
                    (<strong>glissez</strong> la souris ou <strong>cliquez</strong> sur les photos pour en avoir la preuve)
                </div>
            </div>
            <div className="container-fluid agenceMainSection">
                <div className="row">
                    <div className="col-xl-6 col-md-6 agenceImgRow agenceImgRowUp">
                        <div className="agenceImageBW daniel">
                            <img src={Daniel} />
                        </div>
                        <div className="agenceImageColor daniel">
                            <img src={DanielColor} />
                            <div className="agencePersonTitleAndTag">
                                <div className="agencePersonTitleWrapper">
                                    <div className="agencePersonTitle">
                                        <h3>daniel dõ</h3>
                                        <p>président</p>
                                        <p>chef de la création</p>
                                    </div>
                                    <div className="agenceEnvelopeWrapper">
                                        <a href="mailto:danieldo@algego.com">
                                            <img src={Envelope} alt="Envelope" />
                                        </a>
                                    </div>
                                </div>
                                <div className="agencePersonTag"><div>#créateur-de-l’univers</div></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 agenceImgRow">
                        <div className="agenceImageBW antoine">
                            <img src={Antoine} />
                        </div>
                        <div className="agenceImageColor antoine">
                            <img src={AntoineColor} />
                            <div className="agencePersonTitleAndTag">
                                <div className="agencePersonTitleWrapper">
                                    <div className="agencePersonTitle">
                                        <h3>antoine prugne</h3>
                                        <p>coprésident</p>
                                        <p>chef de la stratégie</p>
                                    </div>
                                    <div className="agenceEnvelopeWrapper">
                                        <a href="mailto:antoineprugne@algego.com">
                                            <img src={Envelope} alt="Envelope" />
                                        </a>
                                    </div>
                                </div>
                                <div className="agencePersonTag"><div>#cerveau-à-moto</div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-md-6 agenceImgRow">
                        <div className="agenceImageBW">
                            <img src={Maxime} />
                        </div>
                        <div className="agenceImageColor">
                            <img src={MaximeColor} />
                            <div className="agencePersonTitleAndTag">
                                <div className="agencePersonTitleWrapper">
                                    <div className="agencePersonTitle">
                                        <h3>maxime harquet</h3>
                                        <p>responsable des opérations</p>
                                    </div>
                                    <div className="agenceEnvelopeWrapper">
                                        <a href="/contactus">
                                            <img src={Envelope} alt="Envelope" />
                                        </a>
                                    </div>
                                </div>
                                <div className="agencePersonTag"><div>#les-mots-sans-les-maux</div></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 agenceImgRow">
                        <div className="agenceImageBW">
                            <img src={Julie} />
                        </div>
                        <div className="agenceImageColor">
                            <img src={JulieColor} />
                            <div className="agencePersonTitleAndTag">
                                <div className="agencePersonTitleWrapper">
                                    <div className="agencePersonTitle">
                                        <h3>julie guillaume</h3>
                                        <p>responsable du développement</p>
                                        <p>et des solutions innovantes</p>
                                    </div>
                                    <div className="agenceEnvelopeWrapper">
                                        <a href="/contactus">
                                            <img src={Envelope} alt="Envelope" />
                                        </a>
                                    </div>
                                </div>
                                <div className="agencePersonTag"><div>#visionnaire-en-un-clic</div></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 agenceImgRow">
                        <div className="agenceImageBW">
                            <img src={Moha} />
                        </div>
                        <div className="agenceImageColor">
                            <img src={MohaColor} />
                            <div className="agencePersonTitleAndTag">
                                <div className="agencePersonTitleWrapper">
                                    <div className="agencePersonTitle">
                                        <h3>moha arzhang</h3>
                                        <p>webmestre</p>
                                    </div>
                                    <div className="agenceEnvelopeWrapper">
                                        <a href="/contactus">
                                            <img src={Envelope} alt="Envelope" />
                                        </a>
                                    </div>
                                </div>
                                <div className="agencePersonTag"><div>#chapeau-les-codeurs</div></div>
                            </div>
                        </div>
                    </div>
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