// JavaScriptBasics.js

import React from 'react';
import JsVariables from './JsVariables';
import JsFunctions from './JsFunctions';
import JsObjects from './JsObjects';
import JsArrays from './JsArrays';

const JavaScriptBasics = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-8 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-semibold mb-4">Fundamentos de JavaScript</h2>
      <div className="mb-6">
        <p className="text-gray-700">
          JavaScript es un lenguaje de programación que se utiliza para hacer que las páginas web sean interactivas. Aquí tienes algunos conceptos básicos:
        </p>
      </div>
      <JsVariables />
      <JsFunctions />
      <JsObjects />
      <JsArrays />
    </div>
  );
};

export default JavaScriptBasics;
