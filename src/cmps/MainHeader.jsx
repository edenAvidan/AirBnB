import SearchBar from './SearchBar';
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
        <SearchBar />
        <div className="user-setting flex align-center justify-between ">
          <div className="host-link flex align-center">Become a Host</div>
          <div className="i18-container flex align-center justify-center">
            <img className="i18" src={i18} alt="" />
          </div>
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
