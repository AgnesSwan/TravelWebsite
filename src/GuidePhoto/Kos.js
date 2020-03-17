import React from 'react';
import './Kos.css';
import KosCity from '../Image/Grecja/KosCity.jpg';
import Nissyros from '../Image/Grecja/Nissyros.jpg';
import Turcja from '../Image/Grecja/Turcja.jpg';
import Zatoka from '../Image/Grecja/Zatoka.jpg';
import Zia from '../Image/Grecja/Zia.jpg';


const Kos = props => (
  <div className='Kos__card'>
    <div className="Kos__header">
      <div className="Kos__title">Grecja, Kos </div>
      <div className="Kos__subtitle"><i>W tydzień</i></div>
    </div>
    <div className="Kos__box">
      <div className="imgKos__box">
        <img src={KosCity} alt="Greece" />
      </div>
      <div className="Kos__text">
        <h3>Kos City</h3>
        <div className="Kos__text__opis">Największe miasto oraz stolica wyspy. Warto tutaj zobaczyć między innymi zamek, drzewo Hipokratesa czy port. Stąd też można się udać na wycieczki na sąsiadujące wyspy oraz do Turcji. </div>
      </div>
    </div>

    <div className="Kos__box" >
      <div className="imgKos__box">
        <img src={Zia} alt="Greece" />
      </div>
      <div className="Kos__text">
        <h3>Zia i Dikeos</h3>
        <div className="Kos__text__opis">Miejscowość Zia położona jest na stokach gór i rozpościera się z niej przepiękny widok na całą wyspę. Znajduje się tutaj również początek szlaku na najwyższy szczyt wyspy - Dikeos (846 m.n.p.m.) oraz do ruin miasta Pyli.</div>
      </div>
    </div>

    <div className="Kos__box" >
      <div className="imgKos__box">
        <img src={Zatoka} alt="Greece" />
      </div>
      <div className="Kos__text">
        <h3>Agios Stefanos Beach</h3>
        <div className="Kos__text__opis">Na wyspie Kos można znaleźć wiele plaży z krystalicznie czystą wodą. Jednak najbardziej fenomenalna jest Agios Stefanos Beach. Można tutaj również podziwiać ruiny budowlni antycznej bądź popłynąć wpław na pobliską wysepkę z kościołem</div>
      </div>
    </div>

    <div className="Kos__box" >
      <div className="imgKos__box">
        <img src={Nissyros} alt="Greece" />
      </div>
      <div className="Kos__text">
        <h3>Nisyros</h3>
        <div className="Kos__text__opis">Jedną z wycieczek, które można wykupić z Kos jest zwiedzanie wyspy wulkanicznej. Wyspa ta ma swój urok, można w niej podziwiać klasyczne budowlne Greckie z niebiesko-białymi akcentami lub przejść się po kraterze wulkanu.</div>
      </div>
    </div>

    <div className="Kos__box" >
      <div className="imgKos__box">
        <img src={Turcja} alt="Greece" />
      </div>
      <div className="Kos__text">
        <h3>Bodrum, Turcja</h3>
        <div className="Kos__text__opis">Z wyspy Kos, a szczególności z miasta Kos odleglość do Turcji jest niewielka. Warto w związku z tym udać się chociażby na zwiedzenie jednego z większych portów Turcji - Bodrum, spróbować tam posiłków czy udać się na zakupy. Należy jednak pamiętać, iż Turcja znajduje się poza Unią Europejską i należy posiadać tutaj paszport.</div>
      </div>
    </div>

  </div>


);
export default Kos; 