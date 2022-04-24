import React from "react";
import { Navbar } from "../Navbar";
import navStyles from "../About/AboutUs.module.css";
import { logo_blue } from "../utils/svg";
import styles from "./Articles.module.css";
import photo1 from "./Articles-images/photo1.png";
import photo2 from "./Articles-images/photo2.png";
import photo3 from "./Articles-images/photo3.png";
import photo4 from "./Articles-images/photo4.png";
import photo5 from "./Articles-images/photo5.png";
import photo6 from "./Articles-images/photo6.png";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";
import vector from "../About/About-images/Vector.png"


const Articles = ({active, setActive}) => {
  return (
    <>
      <Navbar styles={navStyles} logo={logo_blue} active={active} setActive={setActive} vector={vector}/>
      <main className={styles.articles_sec}>
        <h1>ЦІКАВІ ПУБЛІКАЦІЇ ВІД АВТОРІВ MOXXXY</h1>
        <div className={styles.articles_blocks}>
          <Link to='/singlearticle'>
            <div className={styles.artcl_block}>
              <img src={photo1} alt="" />
              <div className={styles.artcl_info}>
                <span>11.04.2022</span>
                <h2>Найкращі проекти заміських будинків</h2>
                <p>
                  До будь-якої житлової будівлі пред'являються особливі вимоги.
                  Заміський будинок повинен бути не тільки надійно збудований,
                  але й мати привабливий екстер'єр.
                </p>
              </div>
            </div>
          </Link>
          <div className={styles.artcl_block}>
            <img src={photo2} alt="" />
            <div className={styles.artcl_info}>
              <span>30.01.2022</span>
              <h2>Проекти будинків для вузьких ділянок</h2>
              <p>
                У каталозі архітектурної компанії TMV представлені проекти
                будинків для вузьких ділянок – стильні та красиві архітектурні
                рішення, які застосовуються на обмежених за розміром будівельних
                майданчиках.
              </p>
            </div>
          </div>
          <div className={styles.artcl_block}>
            <img src={photo3} alt="" />
            <div className={styles.artcl_info}>
              <span>04.12.2021</span>
              <h2>100 проектів котеджів</h2>
              <p>
                До питання будівництва власної нерухомості, можливо, навіть
                будинки мрії необхідно відноситися з усією серйозністю. Потрібно
                вибирати найкраще, починаючи від прийняття планувальних рішень
                на папері та закінчуючи покупкою матеріалів для фінішного
                оздоблення фасаду.
              </p>
            </div>
          </div>
          <div className={styles.artcl_block}>
            <img src={photo4} alt="" />
            <div className={styles.artcl_info}>
              <span>11.10.2021</span>
              <h2>Найкрасивіші проекти будинків та котеджів</h2>
              <p>
                Вкрай важливо, щоб житлова будівля була не просто збудована на
                совість, але ще й добре виглядала. Кожен власник нерухомості
                вільно чи ні, але пред'являє вимоги до її екстер'єру.
              </p>
            </div>
          </div>
          <div className={styles.artcl_block}>
            <img src={photo5} alt="" />
            <div className={styles.artcl_info}>
              <span>01.09.2020</span>
              <h2>Сучасні проекти будинків та котеджів</h2>
              <p>
                Протягом останніх кількох років намітилася тенденція робити
                житлову нерухомість якомога модерновішою, причому не тільки по
                дизайну. Сьогодні в моді саме сучасні проекти будинків та
                котеджів, у всіх сенсах цього поняття.
              </p>
            </div>
          </div>
          <div className={styles.artcl_block} id={styles.last_artcl_block}>
            <img src={photo6} alt="" />
            <div className={styles.artcl_info}>
              <span>17.06.2019</span>
              <h2>Проект будинку 10 на 12 (9 на 12): характерні риси</h2>
              <p>
                Якщо дивитися на цифри виключно на папері, то площею 10 на 12 (9
                на 12) квадратних метрів може здатися недостатньо великою. Тим
                часом у сім'ї, яка проживає у трикімнатній квартирі стандартної
                «хрущовки», вільного простору ще менше.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.pagination}>
          <span>{"< "}НАЗАД</span>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          <span>ВПЕРЕД{" >"}</span>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Articles;
