import search from '../assets/svgs/search.svg';
const MainHeader = () => {
  return (
    <div className="main-header">
      <section className="container flex justify-between align-center main-layout">
        <div className="logo">airbnb</div>
        <div className="search-bar flex justify-between align-center">
          <div>Anywhere</div>
          <div>Any Week</div>
          <div>Add guests</div>
          <div className="search-icon flex align-center justify-center">
            <img src={search} alt="" />
          </div>
        </div>
        <div className="log-in flex align-center">Login</div>
      </section>
    </div>
  );
};

export default MainHeader;
