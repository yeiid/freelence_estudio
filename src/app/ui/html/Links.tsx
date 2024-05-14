// Links.js

import React from 'react';

const Links = () => {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2">Enlaces</h3>
      <p>
        Utiliza la etiqueta <code>&lt;a&gt;</code> para crear enlaces:
      </p>
      <pre className="bg-gray-600 p-4 rounded-md">
        {`<a href="https://www.ejemplo.com">Enlace a Ejemplo.com</a>`}
      </pre>
    </div>
  );
};

export default Links;
