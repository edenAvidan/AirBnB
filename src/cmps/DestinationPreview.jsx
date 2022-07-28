const DestinationPreview = ({stay}) => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  if (!stay) return <div>Loading...</div>;
  return (
    <section className="dest-preview" style={{}}>
      <div className="dest-preview-img-container">
        <img src={require(`../assets/images/${stay.imgUrls[0]}`)} alt="" />
      </div>
      <section className="dest-preview-info">
        <p>
          {stay.address.city}, {stay.address.country}
        </p>
        <p>{getRandomInt(1, 10000)} kilometers away</p>
        <p>Sep 20 - 25</p>
        <p>{stay.price}₪ night</p>
      </section>
    </section>
  );
};

export default DestinationPreview;
