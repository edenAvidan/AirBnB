import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import SliderArrow from './SliderArrow';
import { useState } from 'react';

const CostumeSlider = ({ sliderSettings, imgUrls }) => {
  const [isNextShown, setIsNextShown] = useState(true);
  const [isPrevShown, setIsPrevShown] = useState(false);
  const toggleArrow = (prevIdx, nextIdx) => {
    setIsPrevShown(nextIdx !== 0);
    setIsNextShown(nextIdx !== imgUrls.length - 1);
  };

  return (
    <Slider
      {...sliderSettings}
      nextArrow={<SliderArrow isShown={isNextShown} />}
      prevArrow={<SliderArrow isPrev={true} isShown={isPrevShown} />}
      beforeChange={toggleArrow}
    >
      {imgUrls.map((imgUrl, idx) => (
        <div key={idx} className="dest-preview-img-container">
          <img src={require(`../../assets/images/${imgUrl}`)} alt="" />
        </div>
      ))}
    </Slider>
  );
};

export default CostumeSlider;
