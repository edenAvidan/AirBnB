import search from '../assets/svgs/search.svg';

const SearchBar = ({setFilterBy}) => {
  const btns = ['Anywhere', 'Any week', 'Add guests'];

  const searchStay = (ev) => {
    const filterBy = ev === 'Anywhere' ? 'anywhere' : ev.target.outerText;
    setFilterBy(filterBy);
  };

  return (
    <div className="search-bar flex justify-around align-center">
      {btns.map((btn, idx) => (
        <div onClick={searchStay} key={idx}>
          {btn}
        </div>
      ))}
      <div
        className="search-icon flex align-center justify-center"
        onClick={() => searchStay('Anywhere')}
      >
        <img src={search} alt="" />
      </div>
    </div>
  );
};

export default SearchBar;
