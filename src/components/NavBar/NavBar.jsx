import "./NavBar.scss"
import arrowRight from '../../assets/icons/chevron_right-24px.svg'

function NavBar() {

  return (
   <div className="nav-bar">
        <span className=" selected-page">Home </span>
        <img className="arrow-icon" src={arrowRight}/>
        <span className=" selected-page">TV & Entertainment </span>
        <img className="arrow-icon" src={arrowRight}/>
        <span className="current-page ">What to Watch </span>
   </div>
  )
}

export default NavBar;