import React from 'react';
import './Mediolan.css';
import Katedra from '../Image/Mediolan/Katedra.jpg';
import Shopping from '../Image/Mediolan/Shopping.jpg';
import Zamek from '../Image/Mediolan/Zamek.jpg';




const Mediolan = props => (
  <div className='Mediolan__card'>
    <div className="Mediolan__header">
      <div className="Mediolan__title">Włochy, Mediolan</div>
      <div className="Mediolan__subtitle"><i>W dwa dni</i></div>
    </div>
    <div className="Mediolan__box">
      <div className="imgMediolan__box">
        <img src={Katedra} alt="Katedra" />
      </div>
      <div className="Mediolan__text">
        <h3>Katedra Narodzin św. Marii w Mediolanie</h3>
        <div className="Mediolan__text__opis">...</div>
      </div>
    </div>

    <div className="Mediolan__box">
      <div className="imgMediolan__box">
        <img src={Shopping} alt="Shopping" />
      </div>
      <div className="Mediolan__text">
        <h3>Galeria Wiktora Emanuela II</h3>
        <div className="Mediolan__text__opis">...</div>
      </div>
    </div>

    <div className="Mediolan__box">
      <div className="imgMediolan__box">
        <img src={Zamek} alt="Zamek" />
      </div>
      <div className="Mediolan__text">
        <h3>Castello Sforzesco</h3>
        <div className="Mediolan__text__opis">...</div>
      </div>
    </div>

  </div>


);
export default Mediolan; 