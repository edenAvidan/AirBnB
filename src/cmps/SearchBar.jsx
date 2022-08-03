import search from '../assets/svgs/search.svg';

const SearchBar = ({ openFullBar }) => {
  const btns = ['Anywhere', 'Any week', 'Add guests'];

  // const searchStay = (ev) => {
  //   const filterBy = ev === 'Anywhere' ? 'anywhere' : ev.target.outerText;
  //   setFilterBy(filterBy);
  // };

  return (
    <div className="search-bar flex justify-around align-center">
      {btns.map((btn, idx) => (
        <div onClick={openFullBar} key={idx}>
          {btn}
        </div>
      ))}
      <div className="search-icon flex align-center justify-center">
        <img src={search} alt="" />
      </div>
    </div>
  );
};

export default SearchBar;
