
const DestinationPreview = ({ stay }) => {
    if (!stay) return <div>Loading...</div>
    return (
        <section className="dest-preview">
            {stay.name}
        </section>
    )
}

export default DestinationPreview