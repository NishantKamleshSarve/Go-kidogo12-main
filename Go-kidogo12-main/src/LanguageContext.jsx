// src/LanguageContext.js
import React, { createContext, useContext, useState } from "react";
import { translations } from "./lang"; // make sure lang.js is correct

const LanguageContext = createContext(); // This MUST be defined before useContext()

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const translate = (key) => translations[lang]?.[key] || key;
  const switchLanguage = (languageCode) => setLang(languageCode);

  return (
    <LanguageContext.Provider value={{ lang, translate, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
