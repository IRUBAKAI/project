import React from "react";
import { Navbar } from "../Navbar";
import navStyles from "../About/AboutUs.module.css";
import { logo_blue } from "../utils/svg";
import styles from "./Projects.module.css";
import photo1 from "./Projects-images/photo1.png";
import photo2 from "./Projects-images/photo2.png";
import photo3 from "./Projects-images/photo3.png";
import photo4 from "./Projects-images/photo4.png";
import photo5 from "./Projects-images/photo5.png";
import photo6 from "./Projects-images/photo6.png";
import Footer from "../Home/Footer";
import vector from "../About/About-images/Vector.png"

const SingleProject = ({active, setActive}) => {
  return (
    <>
      <Navbar styles={navStyles} logo={logo_blue} vector={vector} active={active} setActive={setActive}/>
      <main>
        <div className={styles.arrow_links}>
          <span>MOXXXY {">"} </span>
          <span>Проекти {">"} </span>
          <span>Проектування {">"} </span>
          <span className={styles.bold_link}>Віта Поштова: Візуалізація будівель на території</span>
        </div>
        <h1 className={styles.main_title}>Віта Поштова: Візуалізація будівель на території</h1>
        <button className={styles.application_btn}>ЗАЛИШИТИ ЗАЯВКУ</button>
        <div className={styles.title_block}>
          <div className={styles.line}></div>
          <h2>ЗАГАЛЬНІ ХАРАКТЕРИСТИКИ</h2>
          <div className={styles.line}></div>
        </div>
        <div className={styles.characteristics}>
          <p>
            <span className={styles.blue_text}>Загальна площа</span>
            <span className={styles.gray_text}>: 357.7 </span>м<sup>2</sup>{" "}
            <br />
            <span className={styles.blue_text}>Площа першого поверху</span>
            <span className={styles.gray_text}>: 163.4 </span>м<sup>2</sup>{" "}
            <br />
            <span className={styles.blue_text}>Площадругого поверху</span>
            <span className={styles.gray_text}>: 194.3</span>м<sup>2</sup>{" "}
            <br />
            <span className={styles.blue_text}>Житлова площа</span>
            <span className={styles.gray_text}>: 142.9</span>м<sup>2</sup>{" "}
            <br />
            <span className={styles.blue_text}>Габарити</span>
            <span className={styles.gray_text}>: 24.47</span> х{" "}
            <span className={styles.gray_text}>21.09</span> м <br />
            <span className={styles.blue_text}>Висота першого поверху</span>
            <span className={styles.gray_text}>: 3.5</span> м <br />
            <span className={styles.blue_text}>Висота другого поверху</span>
            <span className={styles.gray_text}>: 3.1</span> м
          </p>
          <div className={styles.line_beetween_characteristics}></div>
          <p>
            <span className={styles.blue_text}>Кубатура</span>
            <span className={styles.gray_text}>: 1961</span>м<sup>3</sup>
            <br />
            <span className={styles.blue_text}>Площа забудівлі</span>
            <span className={styles.gray_text}>: 492</span>м<sup>2</sup>
            <br />
            <span className={styles.blue_text}>Площа даху</span>
            <span className={styles.gray_text}>: 447</span>м<sup>2</sup>
            <br />
            <span className={styles.blue_text}>Кут нахилу даху</span>
            <span className={styles.gray_text}>: 2°</span>
            <br />
            <span className={styles.blue_text}>Внесення змін: </span>
            можливі
            <br />
            <span className={styles.blue_text}>Автор проекту</span>
            <span className={styles.gray_text}>: MOXXXY</span>
            <br />
            <span className={styles.blue_text}>Вартість проекту</span> : <span className={styles.bold_currency}>від 45
            500 грн.</span>
          </p>
        </div>
        <div className={styles.img_blocks}>
            <img src={photo1} alt="" />
            <img src={photo2} alt="" />
            <img src={photo3} alt="" />
            <img src={photo4} alt="" />
            <img src={photo5} alt="" />
            <img src={photo6} alt="" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SingleProject;
