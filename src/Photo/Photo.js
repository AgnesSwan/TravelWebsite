import React from 'react';
import './Photo.css';
import Katedra from '../Image/Mediolan/Katedra.jpg';
import Shopping from '../Image/Mediolan/Shopping.jpg';
import Zamek from '../Image/Mediolan/Zamek.jpg';
import KosCity from '../Image/Grecja/KosCity.jpg';
import Nissyros from '../Image/Grecja/Nissyros.jpg';
import Turcja from '../Image/Grecja/Turcja.jpg';
import Zatoka from '../Image/Grecja/Zatoka.jpg';
import Zia from '../Image/Grecja/Zia.jpg';
import Durres from '../Image/Albania/Durres.jpg';
import Tirana from '../Image/Albania/Tirana.jpg';
import Kruja from '../Image/Albania/Kruja.jpg';
import Bogova from '../Image/Albania/Bogova.jpg';
import Berat from '../Image/Albania/Berat.jpg';
import Koman from '../Image/Albania/Koman.jpg';
import Vlora from '../Image/Albania/Vlora.jpg';
const Photo = (props) => (
  <>



    <div className="cloud2" >
      <div class="zoomContainer">
        <img width='300' src={Vlora} alt="Vlora"></img>
      </div>
      <div class="zoomContainer">
        <img width='300' src={Koman} alt="Koman"></img>
      </div>
      <div class="zoomContainer">
        <img width='300' src={Berat} alt="Berat"></img>
      </div>
      <div className="enter"></div>
      <div class="zoomContainer">
        <img width='300' src={Bogova} alt="Bogova"></img>
      </div>
      <div class="zoomContainer">
        <img width='300' src={Kruja} alt="Kruja"></img>
        <img width='300' src={Tirana} alt="Tirana"></img>
      </div>
      <div class="zoomContainer">
        <img width='300' src={KosCity} alt="KosCity"></img>
        <img width='300' src={Durres} alt="Durres"></img>
      </div>
      <div className="enter"></div>
      <div class="zoomContainer">
        <img width='300' src={Zia} alt="Zie"></img>
      </div>
      <div className="enter"></div>
      <div class="zoomContainer">
        <img width='300' src={Zatoka} alt="Zatoka"></img>
      </div>
      <div class="zoomContainer">
        <img width='300' src={Turcja} alt="Turcja"></img>
      </div>
      <div class="zoomContainer">
        <img width='300' src={Nissyros} alt="Nissyros"></img>
      </div>
      <div className="enter"></div>
      <div class="zoomContainer">
        <img width='300' src={Zamek} alt="Zamek"></img>
      </div>
      <div class="zoomContainer">
        <img width='300' src={Shopping} alt="Shopping"></img>
      </div>
      <div class="zoomContainer">
        <img width='300' src={Katedra} alt="Katedra"></img>
      </div>
      <div className="enter"></div>
    </div>

  </>

);
export default Photo;