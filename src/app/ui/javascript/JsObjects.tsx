// JsObjects.js

import React from 'react';

const JsObjects = () => {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2">Objetos</h3>
      <p>
        Los objetos en JavaScript permiten agrupar datos y funciones relacionados. Puedes crear objetos utilizando la notación de llaves.
      </p>
      <pre className="bg-gray-600 p-4 rounded-md">
        {`let persona = {
  nombre: "Ana",
  edad: 30,
  saludar: function() {
    return "Hola, soy " + this.nombre + ".";
  }
};`}
      </pre>
    </div>
  );
};

export default JsObjects;
