import React from "react";
import styles from "./Home.module.css";
import { Navbar } from "../Navbar";
import domik from "./home-images/domik.png";
import rectangle from "./home-images/Rectangle 8.png";
import rectangle2 from "./home-images/Rectangle 8-1.png";
import rectangle3 from "./home-images/Rectangle 8-2.png";
import rectangle6 from "./home-images/Rectangle 6.png";
import Partners from "./Partners";
import Footer from "./Footer";
import Service from "./Service";
import { logo } from "../utils/svg";
import vector from "../Home/home-images/Vector.png";

const Home = ({ active, setActive }) => {
  return (
    <>
      <header>
        <div className={styles.background_image}>
          <Navbar
            styles={styles}
            logo={logo}
            active={active}
            setActive={setActive}
            vector={vector}
          />
          <div className={styles.header_title}>
            <h1>MOXXXY</h1>
          </div>
          <div className={styles.header_under_title}>
            <p>
              Будівництво багатоквартирних житлових будинків, приватних
              будинків, офісних, виробничих, відпочинково-оздоровчих об’єктів.
              Крім цього, ми надамо кваліфіковану допомогу з питань оформлення
              технічних паспортів та права власності на об’єкти нерухомості.
            </p>
          </div>
        </div>
      </header>
      <Service styles={styles} />
      <section className={styles.phone_sec}>
        <p className={styles.sec_phone_number}>+38 (044) 232 02 04</p>
        <p className={styles.phone_sec_title}>
          Зателефонуйте нам, або залишіть заявку на сайті. Ми вам зателефонуємо
          протягом 15 хвилин.
        </p>
        <button>ЗАЛИШИТИ ЗАЯВКУ</button>
      </section>
      <section className={styles.about_us}>
        <span>КОРОТКО ПРО НАС</span>
        <div className={styles.left_side}>
          <h2>Ми цінуємо довіру клієнта!</h2>
          <p>
            Основна мета компанії – постійне збільшення обсягів будівництва
            якісного житла, що відповідає сучасним будівельним нормам і потребам
            потенційних покупців, зберігаючи при цьому доступну вартість
            квартир.
          </p>
          <p>
            Принцип компанії – постійне прагнення до виходу на нові рівні
            технічного та ділового розвитку.{" "}
          </p>
        </div>
        <div className={styles.right_side_img}>
          <img src={domik} alt="" />
        </div>
      </section>
      <section className={styles.examples}>
        <div className={styles.sec_title}>
          <span></span>
          <h1>ПРИКЛАДИ НАШИХ РОБІТ</h1>
          <span></span>
        </div>
        <div className={styles.examples_img_block}>
          <ul>
            <li>
              <img src={rectangle} alt="" />
              <p>ПРОЕКТУВАННЯ</p>
            </li>
            <li>
              <img src={rectangle2} alt="" />
              <p>БУДУВАННЯ</p>
            </li>
            <li>
              <img src={rectangle3} alt="" />
              <p>РЕМОНТ ТА СЕРВІС</p>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.achievement}>
        <div className={styles.sec_title}>
          <span></span>
          <h1>ДОСЯГНЕННЯ</h1>
          <span></span>
        </div>
        <div className={styles.achievement_blocks}>
          <div className={styles.achievement_left_side}>
            <ul>
              <li>
                <div className={styles.achievement_numbers}>
                  <span>5</span>
                </div>
                <p>Нагород “Девелопер року”</p>
              </li>
              <li>
                <div className={styles.achievement_numbers}>
                  <span>6</span>
                </div>
                <p>Нагород “Найкращий житловий комплекс”</p>
              </li>
              <li>
                <div className={styles.achievement_numbers}>
                  <span>5</span>
                </div>
                <p>Нагород “Найкращий сервіс року”</p>
              </li>
              <li>
                <div className={styles.achievement_numbers}>
                  <span>9</span>
                </div>
                <p>Національних нагород за заслуги в області</p>
              </li>
            </ul>
          </div>
          <div className={styles.achievement_right_side}>
            <img src={rectangle6} alt="" />
            <p>“вибір року 2020 серед клієнтів”</p>
          </div>
        </div>
      </section>
      <Partners />
      <Footer />
    </>
  );
};

export default Home;
