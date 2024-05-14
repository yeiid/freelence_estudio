// PythonDictionaries.js

import React from 'react';

const PythonDictionaries = () => {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2">Diccionarios en Python</h3>
      <p>
        Los diccionarios en Python permiten almacenar pares clave-valor.
      </p>
      <pre className="bg-gray-600 p-4 rounded-md">
        {`persona = {"nombre": "Ana", "edad": 30}`}
      </pre>
    </div>
  );
};

export default PythonDictionaries;
