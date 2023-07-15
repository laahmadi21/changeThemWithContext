import { useThemeContext } from "../../context";


const Header = () => {
  const theme = useThemeContext();
  const darkMode =theme.darkMode;
  console.log(theme);
  const changeTheme = () => {
    theme.setDarkMode(!darkMode);
  }
  return (
    <header className={`navbar navbar-expand ${darkMode ? "navbar-dark bg dark" : "bg-secondary navbar-light"}   shadow-sm`}>
      <div className="container">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <a className="nav-link" href="#">صفحه اصلی</a>
          </li>
          <li className="navbar-item">
            <a className="nav-link" href="#"> محصولات ما</a>
          </li>
          <li className="navbar-item">
            <a className="nav-link" href="#">درباره ما </a>
          </li>
          <li className="navbar-item">
            <a className="nav-link" href="#">ارتباط با ما </a>
          </li>
        </ul>
        <button className={`btn ${darkMode ? "btn-light" : "btn-dark"}`} type="button" onClick={changeTheme}>
        {darkMode ? "روشن" : "تاریک"}
        </button>
      </div>
    </header>
  );
};

export default Header;
