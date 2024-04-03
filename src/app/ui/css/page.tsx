// CssBasics.js

import React from 'react';
import CssSelectorProperty from './CssSelectorProperty';
import BoxModel from './BoxModel';
import Flexbox from './Flexbox';

const CssBasics = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-8 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-semibold mb-4">Bases de CSS</h2>
      <div className="mb-6">
        <p className="text-gray-700">
          CSS (Cascading Style Sheets) se utiliza para dar estilo a páginas web. Aquí tienes algunas propiedades y conceptos básicos:
        </p>
      </div>
      <CssSelectorProperty />
      <BoxModel />
      <Flexbox />
    </div>
  );
};

export default CssBasics;
