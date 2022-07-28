import search from '../assets/svgs/search.svg';
import user from '../assets/svgs/user-avatar.svg';
import nav from '../assets/svgs/hamburger.svg';
import i18 from '../assets/svgs/i18.svg';
import logo from '../assets/images/apple-touch-icon.png';
// import logoName from '../assets/images/logo-name.png';

const MainHeader = () => {
  return (
    <div className="main-header">
      <section className="container flex justify-between align-center main-layout">
        <div className="logo flex align-center">
          <img src={logo} alt="" />
          {/* <img className="logo-name" src={logoName} alt="" /> */}
          <span className="logo-name">airbnb</span>
        </div>
        <div className="search-bar flex justify-around align-center">
          <div>Anywhere</div>
          <div>Any week</div>
          <div>Add guests</div>
          <div className="search-icon flex align-center justify-center">
            <img src={search} alt="" />
          </div>
        </div>
        <div className="user-setting flex align-center justify-between justify-center">
          <div className="i18-container flex align-center ">
            <img className="i18" src={i18} alt="" />
          </div>
          <div>Become a Host</div>
          <div className="log-in flex align-center">
            <img className="nav" src={nav} alt="" />
            <img className="user" src={user} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainHeader;
