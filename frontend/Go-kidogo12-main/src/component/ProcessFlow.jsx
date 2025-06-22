import React from "react";
import "./ProcessFlow.css";
import { useLanguage } from "../LanguageContext";
// Importing Images
import order from "../assets/50.jpg";
import pack from "../assets/51.jpg";
import scan from "../assets/53.jpg";
import eat from "../assets/54.jpg";
import returnBowl from "../assets/55.jpg";
import clean from "../assets/56.jpg";

const GoKidogoUI = () => {
   const { translate } = useLanguage();
  return (
    <div className="section-layout">
      {/* Left: Description Section */}
      <div className="GoKidogoDescription">
        <h2>{translate("t35")}</h2>
        <p>{translate("t36")}</p>
      </div>

      {/* Right: Steps Section */}
      <div className="steps-container">
        <div className="card1">
          <div className="step">1</div>
          <img src={order} alt="Order Food" className="icon" />
          <p>{translate("t29")}</p>
        </div>

        <div className="card1">
          <div className="step">2</div>
          <img src={pack} alt="Pack Food" className="icon" />
          <p>{translate("t31")}</p>
        </div>

        <div className="card1">
          <div className="step">3</div>
          <img src={scan} alt="Eat Bowls" className="icon" />
          <p> {translate("t33")}</p>
        </div>

        <div className="card1">
          <div className="step">4</div>
          <img src={eat} alt="Borrow Bowls" className="icon" />
          <p> {translate("t39")}</p>
        </div>

        <div className="card1">
          <div className="step">5</div>
          <img src={returnBowl} alt="Return Bowls" className="icon" />
          <p>{translate("t92")}</p>
        </div>

        <div className="card1">
          <div className="step">6</div>
          <img src={clean} alt="Clean Bowls" className="icon" />
          <p> {translate("t93")}</p>
        </div>

        {/* Order More Section */}
        <div className="order">
          <h2> {translate("t37")}</h2>
          <p>{translate("t38")}</p>
        </div>
      </div>
    </div>
  );
};

export default GoKidogoUI;
