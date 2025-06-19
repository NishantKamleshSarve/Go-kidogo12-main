import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Partner.css";
import Records from "./records.json";
import { useLanguage } from "../LanguageContext";
import { Contact } from "lucide-react";
const PartnerPage = () => {
  const [activeService, setActiveService] = useState("All");
  const navigate = useNavigate();
  const {translate} = useLanguage();
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPartners =
    activeService === "All"
      ? Records
      : Records.filter((p) => p.services.includes(activeService));

  return (
    <>
      {/* Header Section */}
      <div className="abc">
        <div className="overlay"></div>
        <h1>
          {filteredPartners.length} {translate("t2")}
          {filteredPartners.length !== 1 && "s"}
        </h1>
      </div>

      {/* Wave animation background */}
      <div className="wave-container1">
        <div className="wave-element wave-1"></div>
        <div className="wave-element wave-2"></div>
        <div className="wave-element wave-3"></div>
      </div>

      <div className="partner-wrapper">
        <div className="partner-filters">
          {["All", "Delivery", "Takeaway"].map((opt) => (
            <label
              key={opt}
              className={`radio-btn ${activeService === opt ? "active" : ""}`}
            >
              <input
                type="radio"
                name="service"
                value={opt}
                checked={activeService === opt}
                onChange={() => setActiveService(opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      <div className="partner-banner">
        <span>
      {translate("t97")}
        </span>
        <span className="partner-icon">🚴‍♂️</span>
      </div>

      <div className="card-container">
        {filteredPartners.map((record, index) => (
          <div
            className="box"
            key={index}
            onClick={() => navigate(`/restaurant/${record.restroid}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="card-image">
              <img src={record.image} alt={record.name} className="card-image" />
              <div className="cuisine-tag">{record.cuisine}</div>
            </div>
            <div className="card-info">
              <div className="status-badge">open</div>
              <div className="restaurant-name">{record.name}</div>
              <div className="address">{record.address}</div>
            </div>
            <div className="options">
              <div><i className="fas fa-shopping-bag"></i>🛍️ {translate("t156")}</div>
              <div><i className="fas fa-biking"></i>🚴 {translate("t157")}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PartnerPage;
