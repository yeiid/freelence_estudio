// JsArrays.js

import React from 'react';

const JsArrays = () => {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2">Arreglos</h3>
      <p>
        Los arreglos son listas ordenadas de valores. Puedes crear arreglos utilizando corchetes y acceder a elementos por su índice.
      </p>
      <pre className="bg-gray-600 p-4 rounded-md">
        {`let colores = ["rojo", "verde", "azul"];
let primerColor = colores[0];`}
      </pre>
    </div>
  );
};

export default JsArrays;
