import { NavLink, Link } from "react-router-dom";
import { useState } from "react";   // <-- ADD THIS
import "./navbar.css";




function Navbar() {

  const [moreClick, setMoreClick] = useState(false);


  function Event(){
    if(moreClick === false){
      setMoreClick(true)
    }else{
      setMoreClick(false)
    }

  }

  return (
    <>
      <div className='navbar'>
        <Link to={"/"}>
          <img src="/media/logo.png" className='Logo' alt="logo" />
          {/* <p>M-CURIE</p> */}
        </Link>
        <div className="navLinks">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/biography"}>Biography</NavLink>
          <NavLink to={"/research"}>Research</NavLink>
          <NavLink to={"/award"}>Award & honors</NavLink>
        </div>
        <button className='moreNav' onClick={Event}>More...</button>
        <div className={moreClick? "MoreButton" : "hidden"} onClick={Event}>
          <div className="moreButtonLinks">
            <NavLink to={"/education"} onClick={Event}>Education & Career</NavLink>
            <NavLink to={"/selectwork"} onClick={Event}>Selected Works/Books</NavLink>
            <NavLink to={"/gallery"} onClick={Event}>Gallery</NavLink>
            <NavLink to={"/references"} onClick={Event}>References</NavLink>
          </div>
        </div>
      </div>
      <div className="mobileNav hidden">
        <img src="/media/logo.png" className='Logo' alt="logo" />

      </div>
    </>
  )
}

export default Navbar;