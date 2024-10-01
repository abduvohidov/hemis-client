import React from "react";
import "./Error.css";

export const Error: React.FC = () => {
  return (
    <div className="section-error">
      <h1 className="error text-center">404</h1>
      <p className="page text-center">Siz qidirayotgan sahifa topilmadi</p>
      <a className="back-home" href="/login">
        Kirish sahifasiga qaytish
      </a>
    </div>
  );
};
