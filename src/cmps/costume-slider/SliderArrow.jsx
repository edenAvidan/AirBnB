import { useState } from 'react';

const SliderArrow = ({ onClick, isPrev = false, isShown }) => {
  // const [isShown, setIsShown] = useState(true);
  // const toggleArrow = (idx) => {
  //   if (idx === 0 && isPrev) setIsShown(false);
  //   else if (idx === numOfImgs - 1 && !isPrev) setIsShown(false);
  //   else setIsShown(true);

  //   // setIsShown(idx === 0 && isPrev && idx === numOfImgs - 1 && !isPrev);
  // };

  return (
    <div
      onClick={onClick}
      className={`slick-arrow ${isPrev ? 'prev-arrow' : 'next-arrow'} ${
        isShown ? '' : 'slick-disabled'
      }`}
    ></div>
  );
};

export default SliderArrow;
