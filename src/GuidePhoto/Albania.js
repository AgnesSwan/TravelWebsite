import React from 'react';
import './Albania.css';
import Durres from '../Image/Albania/Durres.jpg';
import Tirana from '../Image/Albania/Tirana.jpg';
import Kruja from '../Image/Albania/Kruja.jpg';
import Bogova from '../Image/Albania/Bogova.jpg';
import Berat from '../Image/Albania/Berat.jpg';
import Koman from '../Image/Albania/Koman.jpg';
import Vlora from '../Image/Albania/Vlora.jpg';



const Albania = props => (
  <div className='Albania__card'>
    <div className="Albania__header">
      <div className="Albania__title">Albania</div>
      <div className="Albania__subtitle"><i>W tydzień</i></div>
    </div>
    <div className="Albania__box">
      <div className="imgAlbania__box">
        <img src={Durres} alt="Durres" />
      </div>
      <div className="Albania__text">
        <h3>Durres</h3>
        <div className="Albania__text__opis">...</div>
      </div>
    </div>

    <div className="Albania__box">
      <div className="imgAlbania__box">
        <img src={Tirana} alt="Tirana" />
      </div>
      <div className="Albania__text">
        <h3>Tirana</h3>
        <div className="Albania__text__opis">...</div>
      </div>
    </div>

    <div className="Albania__box">
      <div className="imgAlbania__box">
        <img src={Kruja} alt="Kruja" />
      </div>
      <div className="Albania__text">
        <h3>Kruja</h3>
        <div className="Albania__text__opis">...</div>
      </div>
    </div>

    <div className="Albania__box">
      <div className="imgAlbania__box">
        <img src={Bogova} alt="Bogova" />
      </div>
      <div className="Albania__text">
        <h3>Bogova</h3>
        <div className="Albania__text__opis">...</div>
      </div>
    </div>

    <div className="Albania__box">
      <div className="imgAlbania__box">
        <img src={Berat} alt="Berat" />
      </div>
      <div className="Albania__text">
        <h3>Berat</h3>
        <div className="Albania__text__opis">...</div>
      </div>
    </div>

    <div className="Albania__box">
      <div className="imgAlbania__box">
        <img src={Koman} alt="Koman" />
      </div>
      <div className="Albania__text">
        <h3>Koman</h3>
        <div className="Albania__text__opis">...</div>
      </div>
    </div>

    <div className="Albania__box">
      <div className="imgAlbania__box">
        <img src={Vlora} alt="Vlora" />
      </div>
      <div className="Albania__text">
        <h3>Vlora</h3>
        <div className="Albania__text__opis">...</div>
      </div>
    </div>

  </div>


);
export default Albania; 