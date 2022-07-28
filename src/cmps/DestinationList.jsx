import DestinationPreview from "./DestinationPreview.jsx";

const DestinationList = ({ stayList }) => {
    return (
        <section className="dest-list">
            <ul className="clean-list">
                {stayList.map(stay => (<DestinationPreview stay={stay} key={stay._id} />))}

            </ul>
        </section>
    )
}

export default DestinationList