import StarRating from '../assets/svgs/star-rating.svg';
import { ReactComponent as LikeIcon } from '../assets/svgs/favorite.svg';
import { useEffect } from 'react';
import CostumeSlider from './costume-slider/CostumeSlider';
import { Link } from 'react-router-dom';
import { stayService } from '../services/stay-service';

const DestinationPreview = ({ stay, userLocation }) => {
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
    <Link to={'stay/' + stay._id}>
      <section className="dest-preview">
        <CostumeSlider sliderSettings={sliderSettings} imgUrls={stay.imgUrls} />
        <LikeIcon className="like-icon" />

        <div className="info-container">
          <section className="dest-preview-info">
            <p className="bold-text">
              {stay.address.city}, {stay.address.country}
            </p>
            <p className="light-text">
              {stayService.getStayDistance(stay.address.location, userLocation)}{' '}
              kilometers away
            </p>
            <p className="light-text">Sep 20 - 25</p>
            <p>
              <span className="dest-preview-price bold-text">
                ${stay.price}{' '}
              </span>
              night
            </p>
          </section>

          <div className="rating flex">
            <img src={StarRating} className="rating-img" alt="" />
            <span>
              {stayService.getFormattedRating(stay.reviewScores.rating)}
            </span>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default DestinationPreview;
