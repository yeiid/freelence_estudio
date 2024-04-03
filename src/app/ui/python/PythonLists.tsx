// PythonLists.js

import React from 'react';

const PythonLists = () => {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2">Listas en Python</h3>
      <p>
        Las listas en Python pueden contener elementos de diferentes tipos.
      </p>
      <pre className="bg-gray-100 p-4 rounded-md">
        {`colores = ["rojo", "verde", "azul"]
primer_color = colores[0]`}
      </pre>
    </div>
  );
};

export default PythonLists;
