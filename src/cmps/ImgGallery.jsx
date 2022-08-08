const ImgGallery = ({ imgs }) => {
  return (
    <div className="img-gallery">
      <div className="header"></div>
      <div className="container">
        {imgs?.map((imgUrl) => {
          return (
            <img
              key={imgUrl}
              src={require(`../assets/images/${imgUrl}`)}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImgGallery;
