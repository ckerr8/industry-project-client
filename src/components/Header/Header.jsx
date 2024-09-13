import "./Header.scss"
import '../../styles/global.scss'
import NavBar from '../NavBar/NavBar.jsx'

function Header() {
  return (
    <header>
      <div className="header">
        <img className="static-image" src="../../src/assets/images/telus-header.png"></img>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
