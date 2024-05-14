// TypeScriptBasics.js

import React from 'react';
import TsVariables from './TsVariables';
import TsFunctions from './TsFunctions';
import TsInterfaces from './TsInterfaces';
import TsArrays from './TsArrays';

const TypeScriptBasics = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white box">
      <h2 className="text-3xl font-semibold mb-4">Fundamentos de TypeScript</h2>
      <div className="mb-6">
        <p className="text-gray-700">
          TypeScript es un superset de JavaScript que agrega tipos estáticos opcionales. Aquí tienes algunos conceptos básicos:
        </p>
      </div>
      <TsVariables />
      <TsFunctions />
      <TsInterfaces />
      <TsArrays />
    </div>
  );
};

export default TypeScriptBasics;
