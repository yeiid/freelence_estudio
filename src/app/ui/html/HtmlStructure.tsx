// HtmlStructure.js

import React from 'react';

const HtmlStructure = () => {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2">Estructura básica de HTML</h3>
      <pre className="bg-gray-100 p-4 rounded-md">
        {`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título de la página</title>
</head>
<body>

  <!-- Contenido de la página -->

</body>
</html>`}
      </pre>
    </div>
  );
};

export default HtmlStructure;
