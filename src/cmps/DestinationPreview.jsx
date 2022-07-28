import StarRating from '../assets/svgs/star-rating.svg';
import { useRef, useState } from 'react';
import { utilService } from '../services/util-service';

const DestinationPreview = ({ stay }) => {
    const [currImgPos, setCurrImgPos] = useState(0);
    const dist = useRef(utilService.getRandomInt(1, 10000))

    const switchImage = () => {
        if (currImgPos + 1 < stay.imgUrls.length) setCurrImgPos(prevImgPos => prevImgPos + 1);
        else setCurrImgPos(0);
    }

    const getFormattedRating = (num) => {
        if (!num) return 'New'
        num /= 20;
        return num % 1 === 0 ? `${num}.0` : num;
    }

    if (!stay) return <div>Loading...</div>;
    return (
        <section className="dest-preview" >
            <div className="dest-preview-img-container" onClick={switchImage}>
                <img src={require(`../assets/images/${stay.imgUrls[currImgPos]}`)} alt="" />
            </div>

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
