import { ReactComponent as SearchIcon } from '../assets/svgs/search.svg';

const FullSearchBar = ({ closeFullBar }) => {
  return (
    <>
      <section className="full-search-bar-wrapper">
        <section className="full-search-bar flex">
          <section className="search-container bar-btn flex column">
            <label htmlFor="search-input">Where</label>
            <input
              type="text"
              id="search-input"
              name="search-input"
              placeholder="Search destinations"
            />
          </section>

          <section className="check-container flex">
            <div className="check-in bar-btn flex column">
              <h4>Check in</h4>
              <p>Add dates</p>
            </div>
            <div className="check-out bar-btn flex column">
              <h4>Check out</h4>
              <p>Add dates</p>
            </div>
          </section>

          <section className="guests-container bar-btn flex">
            <div className="info flex column">
              <h4>Who</h4>
              <p>Add guests</p>
            </div>
            <button className="btn-search">
              <SearchIcon className="search-icon" />
            </button>
          </section>
        </section>
      </section>
      <div onClick={closeFullBar} className="page-shadow"></div>
    </>
  );
};

export default FullSearchBar;
