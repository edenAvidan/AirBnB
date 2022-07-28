import StarRating from '../assets/svgs/star-rating.svg';
import { useRef } from 'react';
import { utilService } from '../services/util-service';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DestinationPreview = ({ stay, userLocation }) => {
    // const dist = useRef(utilService.getRandomInt(1, 10000));

    const getStayDistance = ({ lat, lan }) => {
        const dist = utilService.getCoordsDistInKm(userLocation.lat, userLocation.long, lan, lat);
        return utilService.numberWithCommas(parseInt(dist));
    }

    const getFormattedRating = (num) => {
        if (!num) return 'New'
        num /= 20; // changing from 1/100 to 1/5 rating
        return num % 1 === 0 ? `${num}.0` : num;
    }

    if (!stay) return <div>Loading...</div>;
    return (
        <section className='dest-preview'>
            <Slider dots={true} infinite={false}>
                {
                    stay.imgUrls.map((imgUrl, idx) => (
                        <div key={idx} className="dest-preview-img-container">
                            <img src={require(`../assets/images/${imgUrl}`)} alt="" />
                        </div>
                    ))
                }
            </Slider>

            <div className='info-container'>
                <section className="dest-preview-info">
                    <p className="bold-text">{stay.address.city}, {stay.address.country}</p>
                    <p className="light-text">{getStayDistance(stay.address.location)} kilometers away</p>
                    <p className="light-text">Sep 20 - 25</p>
                    <p><span className='dest-preview-price bold-text'>${stay.price}</span> night</p>
                </section>

                <div className="dest-preview-rating flex">
                    <img src={StarRating} className="rating-img" alt="" />
                    <span>{getFormattedRating(stay.reviewScores.rating)}</span>
                </div>
            </div>
        </section>
    );
};

export default DestinationPreview;
