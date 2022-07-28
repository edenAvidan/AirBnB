import StarRating from '../assets/svgs/star-rating.svg';
import { useRef, useState } from 'react';
import { utilService } from '../services/util-service';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DestinationPreview = ({ stay }) => {
    const [isHovered, setIsHovered] = useState(false);
    const dist = useRef(utilService.getRandomInt(1, 10000));

    const getFormattedRating = (num) => {
        if (!num) return 'New'
        num /= 20;
        return num % 1 === 0 ? `${num}.0` : num;
    }

    const sliderSettings = {
        dots: true,
        infinite: false,
        arrows: isHovered,
    }

    if (!stay) return <div>Loading...</div>;
    return (
        <section className="dest-preview" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Slider {...sliderSettings}>
                {
                    stay.imgUrls.map((imgUrl, idx) => <div key={idx} className="dest-preview-img-container"><img src={require(`../assets/images/${imgUrl}`)} alt="" /></div>)
                }
            </Slider>

            <div className='info-container'>
                <section className="dest-preview-info">
                    <p className="bold-text">
                        {stay.address.city}, {stay.address.country}
                    </p>
                    <p className="light-text">{utilService.numberWithCommas(dist.current)} kilometers away</p>
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
