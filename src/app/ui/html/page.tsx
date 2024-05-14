// HtmlIntroduction.js

import React from 'react';
import HtmlStructure from './HtmlStructure';


import Lists from './Lists';
import Links from './Links';
import Images from './Images';
import Forms from './Forms';

const HtmlIntroduction = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white box">
      <h2 className="text-3xl font-semibold mb-4">Introducción a HTML</h2>
      <div className="mb-6">
        <p className="text-gray-700">
          HTML (HyperText Markup Language) es el lenguaje utilizado para estructurar el contenido en la web. Aquí
          tienes una visión general de algunos conceptos básicos de HTML:
        </p>
      </div>
      <HtmlStructure />

      <Lists />
      <Links />
      <Images />
      <Forms />
    </div>
  );
};

export default HtmlIntroduction;
