import "./NavBar.scss"
import arrowRight from '../../assets/icons/chevron_right-24px.svg'

function NavBar() {

  return (
   <div className="nav-bar">
        <span className="page-nav selected-page">Home </span>
        <img className="arrow-icon" src={arrowRight}/>
        <span className="page-nav selected-page">TV & Entertainment </span>
        <img className="arrow-icon" src={arrowRight}/>
        <span className="page-nav ">What to Watch </span>
   </div>
  )
}

export default NavBar;