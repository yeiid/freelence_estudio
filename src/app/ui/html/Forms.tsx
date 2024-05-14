const Forms = () => {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2">Formularios</h3>
      <p>
        Utiliza la etiqueta <code>&lt;form&gt;</code> para crear formularios
        interactivos:
      </p>
      <pre className="bg-gray-600 p-4 rounded-md">
        {`<form action="/submit" method="post">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" required>

  <label for="email">Correo electrónico:</label>
  <input type="email" id="email" name="email" required>

  <input type="submit" value="Enviar">
</form>`}
      </pre>
    </div>
  );
};

export default Forms;
