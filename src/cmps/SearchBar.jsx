import search from '../assets/svgs/search.svg';

const SearchBar = () => {
  return (
    <div className="search-bar flex justify-around align-center">
      <div>Anywhere</div>
      <div>Any week</div>
      <div>Add guests</div>
      <div className="search-icon flex align-center justify-center">
        <img src={search} alt="" />
      </div>
    </div>
  );
};

export default SearchBar;
