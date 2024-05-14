// Images.js

import React from 'react';

const Images = () => {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2">Imágenes</h3>
      <p>
        Agrega imágenes a tu página con la etiqueta <code>&lt;img&gt;</code>:
      </p>
      <pre className="bg-gray-600 p-4 rounded-md">
        {`<img src="ruta-de-la-imagen.jpg" alt="Descripción de la imagen">`}
      </pre>
    </div>
  );
};

export default Images;
