import StarRating from '../assets/svgs/star-rating.svg';
import { ReactComponent as LikeIcon } from '../assets/svgs/favorite.svg';
import { useEffect } from 'react';
import { utilService } from '../services/util-service';
import CostumeSlider from './costume-slider/CostumeSlider';

const DestinationPreview = ({ stay, userLocation }) => {
  const getStayDistance = ({ lat, lan }) => {
    const dist = utilService.getCoordsDistInKm(
      userLocation.lat,
      userLocation.long,
      lan,
      lat
    );
    return utilService.numberWithCommas(parseInt(dist));
  };

  const getFormattedRating = (num) => {
    if (!num) return 'New';
    num /= 20; // changing from 1/100 to 1/5 rating.
    return num % 1 === 0 ? `${num}.0` : num;
  };

  useEffect(() => {
    const elDots = document.querySelectorAll('.slick-dots li button');
    Array.from(elDots).map((dot) => (dot.disabled = true));
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: false,
    draggable: false,
  };

  if (!stay) return <div>Loading...</div>;
  return (
    <section className="dest-preview">
      <CostumeSlider sliderSettings={sliderSettings} imgUrls={stay.imgUrls} />
      <LikeIcon className="like-icon" />

      <div className="info-container">
        <section className="dest-preview-info">
          <p className="bold-text">
            {stay.address.city}, {stay.address.country}
          </p>
          <p className="light-text">
            {getStayDistance(stay.address.location)} kilometers away
          </p>
          <p className="light-text">Sep 20 - 25</p>
          <p>
            <span className="dest-preview-price bold-text">${stay.price} </span>
            night
          </p>
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
