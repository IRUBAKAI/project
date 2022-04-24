import React from "react";
import britain from "../Home/home-images/britain.png";
import ukraine from "../Home/home-images/ukraine.png";
import { Link } from "react-router-dom";

const Navbar = ({ styles, logo, setActive, active, vector }) => {
  function activeChange() {
    if (active === true) {
      setActive(false);
    } else {
      setActive(true);
    }
  }
  return (
    <>
      <nav className={styles.navbar} id="navbar">
        <img
          src={vector}
          alt=""
          onClick={() => activeChange()}
          className={styles.vector}
        />
        <span>{logo}</span>
        <ul
          className={styles.links}
          id={active === true ? styles.active : styles.unActive}
        >
          <Link to="/project">
            <li>ГОЛОВНА</li>
          </Link>
          <Link to="/aboutus">
            <li>ПРО НАС</li>
          </Link>
          <Link to="/projects">
            <li>ПРОЕКТИ</li>
          </Link>
          <Link to="/articles">
            <li>ГАЛЕРЕЯ</li>
          </Link>
          <Link to="/contact">
            <li>КОНТАКТИ</li>
          </Link>
        </ul>
        <div className={styles.languages}>
          <span className={styles.line}></span>
          <span>
            <img src={ukraine} alt="" />
          </span>
          <span>
            <img src={britain} alt="" />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
