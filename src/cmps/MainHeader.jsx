const MainHeader = () => {
  return (
    <div className="main-header flex justify-between align-center">
      <div className="logo">airbnb</div>
      <div className="search-bar">
        <input type="text" />
      </div>
      <div className="log-in">Login</div>
    </div>
  );
};

export default MainHeader;
