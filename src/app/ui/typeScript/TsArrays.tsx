// TsArrays.js

import React from 'react';

const TsArrays = () => {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2">Arreglos en TypeScript</h3>
      <p>
        Puedes añadir tipos a los elementos de un arreglo en TypeScript.
      </p>
      <pre className="bg-gray-100 p-4 rounded-md">
        {`let colores: string[] = ["rojo", "verde", "azul"];
let primerColor: string = colores[0];`}
      </pre>
    </div>
  );
};

export default TsArrays;
