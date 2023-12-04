import React from "react";
import Takeout from "../Takeout";
import { Link } from "react-router-dom";

const TakeoutButton = () => {
  return (
    <div className="button-container">
      <button className="home-buttons takeout-button">
        <Link
           className="but-link"
          to="takeout"
          rel="noreferrer"
          element={<Takeout />}
        >
          <span className="text-on-button">TAKEOUT NEARBY</span>
        </Link>
      </button>
    </div>
  );
};

export default TakeoutButton;
