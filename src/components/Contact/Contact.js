import React from "react";
import { Navbar } from "../Navbar";
import navStyles from "../About/AboutUs.module.css";
import { logo_blue } from "../utils/svg";
import styles from "./Contact.module.css";
import phone from "./Contact-images/Phone.png";
import mail from "./Contact-images/Mail.png";
import sleepingInBed from "./Contact-images/Sleeping in Bed.png";
import address from "./Contact-images/Address.png";
import building from "./Contact-images/Building.png";
import Footer from "../Home/Footer";
import vector from "../About/About-images/Vector.png";

const Contact = ({ active, setActive }) => {
  return (
    <>
      <Navbar
        styles={navStyles}
        logo={logo_blue}
        active={active}
        setActive={setActive}
        vector={vector}
      />
      <main>
        <h1>НАШІ КОНТАКТИ ТА ЗВОРОТНІЙ ЗВ’ЯЗОК</h1>
        <div className={styles.contact_blocks}>
          <div className={styles.left_block}>
            <p>
              Задайте нам будь-яке запитання, або напишіть відгук про наш
              сервіс! Наші консультанти відповідають протягом 15 хвилин після
              повідомлення!
            </p>
            <form>
              <label for="name">
                <input type="text" name="name" placeholder="Ваше ім'я" />
              </label>
              <label for="email">
                <input
                  type="text"
                  name="email"
                  placeholder="Ваш E-mail/телефон ..."
                />
              </label>
              <label for="name">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Ваше повідомлення ..."
                />
              </label>
              <input
                className={styles.btn_contact}
                type="submit"
                placeholder="ВІДПРАВИТИ"
              />
            </form>
          </div>
          <div className={styles.right_block}>
            <ul>
              <li>
                <img src={phone} alt="" />
                +38 (044) 934 42 31
              </li>
              <li>
                <img src={mail} alt="" />
                moxxxy@gmail.com
              </li>
              <li>
                <img src={address} alt="" />
                Київ, Хрещатик, 23
              </li>
            </ul>
            <ul>
              <li className={styles.contact_li}>Графік роботи:</li>
              <li>
                <img src={building} alt="" />
                <span className={styles.blue_text}>Пн. - Пт.</span> (09:00 -
                20:00)
              </li>
              <li>
                <img src={building} alt="" />
                <span className={styles.blue_text}>Сб.</span> (09:00 - 16:00)
              </li>
              <li>
                <img src={sleepingInBed} alt="" />
                <span className={styles.blue_text}>Нд.</span> (вихідний)
              </li>
            </ul>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.7898411687606!2d30.519870715731248!3d50.44501507947464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce567fa9b42f%3A0x7c42ce90252fbf12!2z0YPQuy4g0JrRgNC10YnQsNGC0LjQuiwgMjMsINCa0LjQtdCyLCAwMTAwMQ!5e0!3m2!1sru!2sua!4v1650562966180!5m2!1sru!2sua"></iframe>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
