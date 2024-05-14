// CssBasics.js

import React from "react";
import CssSelectorProperty from "./CssSelectorProperty";
import BoxModel from "./BoxModel";
import Flexbox from "./Flexbox";

const CssBasics = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white box">
      <h2 className="text-3xl font-semibold mb-4">Bases de CSS</h2>
      <div className="mb-6">
        <p className="text-gray-700">
          CSS (Cascading Style Sheets) se utiliza para dar estilo a páginas web.
          Aquí tienes algunas propiedades y conceptos básicos:
        </p>
      </div>
      <CssSelectorProperty />
      <BoxModel />
      <Flexbox />
    </div>
    
  );
};

export default CssBasics;
