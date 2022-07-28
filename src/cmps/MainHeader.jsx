const MainHeader = () => {
  return (
    <div className="main-header">
      <section className="container flex justify-between align-center main-layout">
        <div className="logo">airbnb</div>
        <div className="search-bar flex justify-between">
          <div>Anywhere</div>
          <div>Any Week</div>
          <div>Add guests</div>
        </div>
        <div className="log-in">Login</div>
      </section>
    </div>
  );
};

export default MainHeader;
