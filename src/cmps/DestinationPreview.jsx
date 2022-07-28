import StarRating from '../assets/svgs/star-rating.svg';
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
        if (!num) return 'New'
        return num % 1 === 0 ? `${num}.0` : num;
    }

    const handleChange = (index, item) => {
        console.log(index, item)
    }

    const getConfigurableProps = () => ({
        showThumbs: false,
        autoPlay: false,
        dynamicHeight: false,
        showStatus: false,
        showIndicators: false,
        useKeyboardArrows: true,
        verticalSwipe: 'natural',
        onChange: handleChange
    });

    if (!stay) return <div>Loading...</div>;
    return (
        <section className="dest-preview" >
            <div className="dest-preview-img-container" onClick={switchImage}>
                <img src={require(`../assets/images/${stay.imgUrls[currImgPos]}`)} alt="" />
            </div>

            {/* <Carousel {...getConfigurableProps()}>
                {
                    stay.imgUrls.map((imgUrl, idx) => (
                        <div key={idx} className="dest-preview-img-container">
                            <img src={require(`../assets/images/${imgUrl}`)} alt="" />
                        </div>
                    ))
                }
            </Carousel> */}

            <div className='info-container'>
                <section className="dest-preview-info">
                    <p className="bold-text">
                        {stay.address.city}, {stay.address.country}
                    </p>
                    <p className="light-text">{utilService.numberWithCommas(getRandomInt(1, 10000))} kilometers away</p>
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
