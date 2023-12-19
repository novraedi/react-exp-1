import logo from "../logo.svg";
export default function Header({ authUser, onSignOut }) {
  const { avatar, name } = authUser;

  return (
    <header>
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="logo" />
          <p className="header__logo-text">ThreadHub</p>
        </div>
        <div className="header__search">
          <input
            className="header__search-input"
            type="text"
            placeholder="Pencarian Diskusi..."
          />
        </div>
        <div className="header__button">
          <p>Welcome, {name}</p>
          <img className="header__user" src={avatar} alt="avatar" />
          <button className="header__button-login" onClick={onSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
}
