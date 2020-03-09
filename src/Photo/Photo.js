import React from 'react';
import './Photo.css';
import Mediolan from '../Image/Mediolan.jpg';
const Photo = (props) => (
  <>



    <div className="cloud2" >
      <div class="zoomContainer">
        <img width='300' src={Mediolan} alt="Mediolan2"></img>
      </div>
      <div class="zoomContainer">
        <img width='300' src={Mediolan} alt="Mediolan2"></img>
      </div>
      <div class="zoomContainer">
        <img width='300' src={Mediolan} alt="Mediolan2"></img>
      </div>
      <div className="enter"></div>
      <div class="zoomContainer">
        <img width='300' src={Mediolan} alt="Mediolan2"></img>
      </div>
      <div class="zoomContainer">
        <img width='300' src={Mediolan} alt="Mediolan2"></img>
      </div>
      <div class="zoomContainer">
        <img width='300' src={Mediolan} alt="Mediolan2"></img>
      </div>
      <div className="enter"></div>

    </div>

  </>

);
export default Photo;