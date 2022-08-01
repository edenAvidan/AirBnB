const SliderArrow = ({ onClick, isPrev = false, isShown }) => {
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
