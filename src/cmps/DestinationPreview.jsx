import { useState } from 'react';
import { utilService } from '../services/util-service';

const DestinationPreview = ({ stay }) => {
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    };

    const [currImgPos, setCurrImgPos] = useState(0);

    const switchImage = () => {
        if (currImgPos + 1 < stay.imgUrls.length) setCurrImgPos(prevImgPos => prevImgPos + 1);
        else setCurrImgPos(0);
    }

    const getFormattedRating = (num) => {
        num /= 20;
        return num % 1 === 0 ? `${num}.0` : num;
    }

    if (!stay) return <div>Loading...</div>;
    return (
        <section className="dest-preview" >
            <div className="dest-preview-img-container" onClick={switchImage}>
                <img src={require(`../assets/images/${stay.imgUrls[currImgPos]}`)} />
            </div>
            <div className='info-container'>
                <section className="dest-preview-info">
                    <p className="bold-text">
                        {stay.address.city}, {stay.address.country}
                    </p>
                    <p className="light-text">{utilService.numberWithCommas(getRandomInt(1, 10000))} kilometers away</p>
                    <p className="light-text">Sep 20 - 25</p>
                    <p><span className='dest-preview-price bold-text'>${stay.price}</span> night</p>
                </section>
                <span className="dest-preview-rating">* {getFormattedRating(stay.reviewScores.rating)}</span>
            </div>
        </section>
    );
};

export default DestinationPreview;
