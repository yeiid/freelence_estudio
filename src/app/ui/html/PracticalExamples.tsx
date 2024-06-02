// components/PracticalExamples.tsx

import React from 'react';

const PracticalExamples: React.FC = () => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4">Ejemplos Prácticos de HTML</h2>

      {/* Ejemplo 1: Página HTML básica */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Ejemplo 1: Página HTML básica</h3>
        <pre className="bg-gray-600 p-4 rounded">
        {/* <CodeBlock Content={example} /> */}

          <code>
            {`
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Primera Página HTML</title>
</head>
<body>
  <h1>Bienvenidos a mi página web</h1>
  <p>Este es un ejemplo de una página HTML básica.</p>
</body>
</html>
            `}
          </code>
        </pre>
      </div>

      {/* Ejemplo 2: Añadir imágenes y enlaces */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Ejemplo 2: Añadir imágenes y enlaces</h3>
        <pre className="bg-gray-600 p-4 rounded">
          <code>
            {`
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Página con Imágenes y Enlaces</title>
</head>
<body>
  <h1>Imágenes y Enlaces</h1>
  <p>Visita <a href="https://www.example.com">este enlace</a> para más información.</p>
  <img src="https://via.placeholder.com/150" alt="Imagen de ejemplo">
</body>
</html>
            `}
          </code>
        </pre>
      </div>

      {/* Ejemplo 3: Listas ordenadas y no ordenadas */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Ejemplo 3: Listas ordenadas y no ordenadas</h3>
        <pre className="bg-gray-600 p-4 rounded">
          <code>
            {`
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Página con Listas</title>
</head>
<body>
  <h1>Listas en HTML</h1>
  <h2>Lista no ordenada</h2>
  <ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
  </ul>
  <h2>Lista ordenada</h2>
  <ol>
    <li>Primer elemento</li>
    <li>Segundo elemento</li>
    <li>Tercer elemento</li>
  </ol>
</body>
</html>
            `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default PracticalExamples;
