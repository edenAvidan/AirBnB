import DestinationPreview from './DestinationPreview.jsx';

const DestinationList = ({ stayList, userLocation }) => {
  const stayListForRender = stayList.slice(0, 50);

  return (
    <section className="dest-list main-layout">
      <ul className="clean-list">
        {stayListForRender.map((stay) => (
          <DestinationPreview
            stay={stay}
            key={stay._id}
            userLocation={userLocation}
          />
        ))}
      </ul>
    </section>
  );
};

export default DestinationList;
