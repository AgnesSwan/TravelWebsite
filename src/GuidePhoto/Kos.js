import React from 'react';
import './Kos.css';
import Grecja from '../Image/Grecja.jpg';
const Kos = props => (
  <div className='Kos__card'>
    <div className="Kos__header">
      <h1>Grecja, Kos </h1>
      <h2><i>W tydzień</i></h2>
    </div>
    <div className="Kos__box">
      <div className="imgKos__box">
        <img src={Grecja} alt="Greece" />
      </div>
      <div className="textCon">
        <h3>Kos City</h3>
        <p>Największe miasto oraz stolica wyspy. Warto tutaj zobaczyć między innymi zamek, drzewo Hipokratesa czy port. Stąd też można się udać na wycieczki na sąsiadujące wyspy oraz do Turcji. </p>

      </div>
    </div>
    <div className="Kos__box" >
      <div className="imgKos__box">
        <img src={Grecja} alt="Greece" />
      </div>
      <div className="textCon">
        <h3>Zia i Dikeos</h3>
        <p>asxdfcvghbklm</p>
      </div>
    </div>
  </div>

);
export default Kos; 