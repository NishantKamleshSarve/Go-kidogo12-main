import React from "react";
import { Link } from "react-router-dom"; // Use Link from react-router-dom
import { ArrowUp } from "lucide-react"; // Assuming you're using lucide-react for icons
import "./Footer.css"; // Import CSS file
import { useLanguage } from "../LanguageContext";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
 const {translate} = useLanguage();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{translate("t41")}</h3>
          <ul>
            <li>
              <Link to="/about">{translate("t110")}</Link> {/* Use `to` instead of `href` */}
            </li>
            <li>
              <Link to="/faq">{translate("t191")}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>{translate("t190")}</h3>
          <ul>
            <li>
              <Link to="/contact">{translate("t67")}</Link>
            </li>
            <li>
              <Link to="/imprint">{translate("t43")}</Link>
            </li>
            <li>
              <Link to="/conditions">{translate("t44")}</Link>
            </li>
            <li>
              <Link to="/privacy">{translate("t45")}</Link>
            </li>
            <li>
              <Link to="/cookie">{translate("t46")}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>GERMANY</h3>
          <ul className="location-list">
            <li>Darmstadt</li>
            <li>Bad Nauheim</li>
            <li>Bad Vilbel</li>
            <li>Borheim Mitte</li>
            <li>Darmstadt</li>
            <li>Eschborn</li>
            <li>Frankfurt</li>
            <li>Gießen</li>
            <li>Griesheim</li>
            <li>Hanau</li>
            <li>Hanau Steinheim</li>
            <li>Hauptstrasse</li>
            <li>Innenstadt</li>
            <li>Nidda</li>
            <li>Sachenhausen Nord</li>
            <li>Westend</li>
            <li>Wetzlar</li>
            <li>Wiesbaden</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>INDIA</h3>
          <ul className="location-list">
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Nagpur</li>
            <li>New Delhi</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>{translate("t53")}</h3>
          <div className="payment-methods">
            <div className="payment-icon visa"></div>
            <div className="payment-icon mastercard"></div>
            <div className="payment-icon paypal"></div>
            <div className="payment-icon amex"></div>
          </div>

          <h3 className="social-heading">{translate("t89")}</h3>
          <div className="social-icons">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon twitter"
            ></a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
            ></a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
            ></a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon youtube"
            ></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-links">
            <Link to="/terms">{translate("t54")}</Link>
            <span className="separator">|</span>
            <Link to="/privacy">{translate("t45")}</Link>
            <span className="separator">|</span>
            <p>&copy;{new Date().getFullYear()} Gokidogo</p>
          </div>
          <button className="scroll-top" onClick={scrollToTop}>
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;