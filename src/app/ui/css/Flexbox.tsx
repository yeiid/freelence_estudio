// Flexbox.js

import React from 'react';

const Flexbox = () => {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2">Flexbox</h3>
      <p>
        Flexbox es un modelo de diseño que permite diseñar diseños complejos y alineaciones con facilidad.
      </p>
      <pre className="bg-gray-100 p-4 rounded-md">
        {`.contenedor-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`}
      </pre>
    </div>
  );
};

export default Flexbox;
