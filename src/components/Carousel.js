import React from "react";
import Slider from "react-slick";
import Bell from '../images/Logos/bell.png'
import CQF from '../images/Logos/cqf.png'
import Desjardins from '../images/Logos/desjardins.png'
import Floralies from '../images/Logos/floralies.png'
import Ikea from '../images/Logos/ikea.png'
import Lotto from '../images/Logos/lotto.png'


export default function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };
    return (
        <Slider {...settings}>
            <div>
                <div className="carouselWrapper"><img className="widthImage" src={Bell}></img></div>
            </div>
            <div>
                <div className="carouselWrapper"><img className="widthImage" src={CQF}></img></div>
            </div>
            <div>
                <div className="carouselWrapper"><img className="widthImage" src={Desjardins}></img></div>
            </div>
            <div>
                <div className="carouselWrapper"><img className="widthImage" src={Floralies}></img></div>
            </div>
            <div>
                <div className="carouselWrapper"><img className="widthImage" src={Ikea}></img></div>
            </div>
            <div>
                <div className="carouselWrapper"><img className="widthImage" src={Lotto}></img></div>
            </div>
        </Slider>
    );
}