import React from 'react'
import { Link } from 'react-router-dom';
import Showroom from "../images/small_yellow_showroom_icon.png";
import Home from "./Home";

const HomeShowroom = () => {
  return (
      <div className="bottom-buttons2">
        <Link to="/" rel="noreferrer" element={<Home />}>
          <img className="showroom-icon" src={Showroom} alt="showroom icon"/>
        </Link>
      </div>
  );
}

export default HomeShowroom;