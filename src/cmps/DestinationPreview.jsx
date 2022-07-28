const DestinationPreview = ({ stay }) => {
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    };

    if (!stay) return <div>Loading...</div>;
    return (
        <section className="dest-preview" >
            <div className="dest-preview-img-container">
                <img src={require(`../assets/images/${stay.imgUrls[0]}`)} />
            </div>
            <section className="dest-preview-info">
                <p className="bold-text">
                    {stay.address.city}, {stay.address.country}
                </p>
                <p className="light-text">{getRandomInt(1, 10000)} kilometers away</p>
                <p>Sep 20 - 25</p>
                <p>{stay.price}₪ night</p>
            </section>
        </section>
    );
};

export default DestinationPreview;
