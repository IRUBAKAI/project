import React from "react";
import { Navbar } from "../Navbar";
import styles from "./Projects.module.css";
import navStyles from "../About/AboutUs.module.css";
import { logo_blue } from "../utils/svg";
import photo1 from "./Projects-images/Frame 1.png";
import photo2 from "./Projects-images/Frame 2.png";
import photo3 from "./Projects-images/Frame 3.png";
import photo4 from "./Projects-images/Frame 4.png";
import photo5 from "./Projects-images/Frame 5.png";
import photo6 from "./Projects-images/Frame 6.png";
import photo7 from "./Projects-images/Frame 7.png";
import photo8 from "./Projects-images/Frame 8.png";
import photo9 from "./Projects-images/Frame 9.png";
import photo10 from "./Projects-images/Frame 10.png";
import photo11 from "./Projects-images/Frame 11.png";
import photo12 from "./Projects-images/Frame 12.png";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";
import vector from "../About/About-images/Vector.png"

const Projects = ({ active, setActive }) => {
  return (
    <>
      <Navbar
        styles={navStyles}
        logo={logo_blue}
        active={active}
        setActive={setActive}
        vector={vector}
      />
      <main className={styles.projects_section}>
        <h1>УСІ ДОСТУПНІ ПРОЕКТИ MOXXXY</h1>
        <div className={styles.btns_block}>
          <button>ПРОЕКТУВАННЯ</button>
          <button>БУДІВНИЦТВО</button>
          <button>РЕМОНТ ТА СЕРВІС</button>
        </div>
        <div className={styles.projects_blocks}>
          <Link to="/singleproject">
            <div className={styles.project_block}>
              <img src={photo1} alt="" />
              <p>Віта Поштова: Візуалізація будівель на території</p>
            </div>
          </Link>
          <div className={styles.project_block}>
            <img src={photo2} alt="" />
            <p>Госп.блок, Петропавлівська Борщагівка</p>
          </div>
          <div className={styles.project_block}>
            <img src={photo3} alt="" />
            <p>Теплиця, Петропавлівська Борщагівка</p>
          </div>
          <div className={styles.project_block}>
            <img src={photo4} alt="" />
            <p>Житловий будинок, Петропавлівська Борщагівка</p>
          </div>
          <div className={styles.project_block}>
            <img src={photo5} alt="" />
            <p>Дитяча площадка, Ірпінь</p>
          </div>
          <div className={styles.project_block}>
            <img src={photo6} alt="" />
            <p>3d візуалізація, київська область</p>
          </div>
          <div className={styles.project_block}>
            <img src={photo7} alt="" />
            <p>Фундамент під хамам, 2020</p>
          </div>
          <div className={styles.project_block}>
            <img src={photo8} alt="" />
            <p>Підпірна стінка, 2019</p>
          </div>
          <div className={styles.project_block}>
            <img src={photo9} alt="" />
            <p>Зоопарк, приматник, київ 2018</p>
          </div>
          <div className={styles.project_block}>
            <img src={photo10} alt="" />
            <p>Село Бреч, чернігівська область, 2016</p>
          </div>
          <div className={styles.project_block}>
            <img src={photo11} alt="" />
            <p>ПФундамент під коттедж, київ, 2020</p>
          </div>
          <div className={styles.project_block}>
            <img src={photo12} alt="" />
            <p>Каркасний фахверк, житомир, 2021</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
