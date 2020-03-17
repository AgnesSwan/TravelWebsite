import React from 'react';
import './GuidePhoto.css';
import Mediolan from '../Image/Mediolan.jpg';
import Albania from '../Image/Albania.jpg';
import Grecja from '../Image/Grecja.jpg';
import { Link } from 'react-router-dom';


const GuidePhoto = props => (
  <>
    <div class="imageGuide">
      <img src={Grecja}
        width="300" height="300" alt="kos" />
      <div class="content">
        <div class="text"><Link to='/Kos'>Grecja, Kos</Link></div>
      </div>
    </div>
    <div class="imageGuide">
      <img src={Albania}
        height="300" alt="Durres" />
      <div class="content">
        <div class="text"><Link to='/Albania'>Albania, Dürres <br /> i okolice</Link></div>
      </div>
    </div>
    <div class="imageGuide">
      <img src={Mediolan}
        width="300" height="300" alt="Mediolan" />
      <div class="content">
        <div class="text"><Link to='/Mediolan'>Włochy, Mediolan</Link></div>
      </div>
    </div>
    <div className="enter"></div>
  </>
);
export default GuidePhoto; 