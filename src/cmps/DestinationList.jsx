import DestinationPreview from './DestinationPreview.jsx';

const DestinationList = ({ stayList }) => {
  const stayListForRender = stayList.slice(0, 50);

  return (
    <section className="dest-list main-layout">
      <ul className="clean-list">
        {stayListForRender.map((stay) => (
          <DestinationPreview stay={stay} key={stay._id} />
        ))}
      </ul>
    </section>
  );
};

export default DestinationList;
