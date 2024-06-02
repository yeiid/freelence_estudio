import React from 'react';

const History: React.FC = () => {
  return (
    <section className='text-gray-700'>
      <h1 className="text-2xl font-bold mb-4">Historia de HTML</h1>

      <div className="mb-6 ">
        <h2 className="text-xl  font-semibold mb-2">1. Orígenes y Creación</h2>
        <p>
          HTML (HyperText Markup Language) es el lenguaje estándar para crear y diseñar páginas web. Fue creado por Tim Berners-Lee en 1991, mientras trabajaba en CERN, la Organización Europea para la Investigación Nuclear. Berners-Lee necesitaba una manera de compartir documentos entre investigadores de manera más eficiente, y así nació la idea de HTML.
        </p>
      </div>

      <div className="mb-6 ">
        <h2 className="text-xl  font-semibold mb-2">2. Primeras Versiones (HTML 1.0 y HTML 2.0)</h2>
        <p>
          <strong>HTML 1.0 (1991):</strong> La primera versión de HTML era muy básica y contenía 18 etiquetas elementales como <code>&lt;p&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, y otras. Esta versión no era formalmente publicada como un estándar oficial.
        </p>
        <p>
          <strong>HTML 2.0 (1995):</strong> Fue la primera versión estandarizada por la Internet Engineering Task Force (IETF). Incluía todas las características de HTML 1.0, además de nuevas etiquetas y atributos para mejorar la funcionalidad.
        </p>
      </div>

      <div className="mb-6 ">
        <h2 className="text-xl  font-semibold mb-2">3. HTML 3.2 y HTML 4.0</h2>
        <p>
          <strong>HTML 3.2 (1997):</strong> Desarrollado por el World Wide Web Consortium (W3C), esta versión añadió soporte para applets de Java, scripts y estilos embebidos, marcando una gran evolución respecto a sus predecesores.
        </p>
        <p>
          <strong>HTML 4.0 (1997):</strong> Introdujo una separación más clara entre contenido y presentación, fomentando el uso de CSS (Cascading Style Sheets) para el diseño visual. También mejoró el soporte para formularios y tablas, y se centró en la accesibilidad.
        </p>
      </div>

      <div className="mb-6 ">
        <h2 className="text-xl  font-semibold mb-2">4. XHTML (Extensible HyperText Markup Language)</h2>
        <p>
          <strong>XHTML 1.0 (2000):</strong> XHTML fue una reforma de HTML 4.0 siguiendo las reglas de XML, haciéndolo más estricto y estructurado. Se exigía que los documentos fueran bien formados, con todas las etiquetas correctamente cerradas y anidadas.
        </p>
      </div>

      <div className="mb-6 ">
        <h2 className="text-xl  font-semibold mb-2">5. HTML5</h2>
        <p>
          <strong>HTML5 (2014):</strong> La versión más reciente y revolucionaria de HTML, desarrollada por el W3C y el Web Hypertext Application Technology Working Group (WHATWG). HTML5 trajo numerosas mejoras y nuevas características:
        </p>
        <ul className="list-disc ml-6">
          <li><strong>Soporte Multimedial:</strong> Etiquetas como <code>&lt;audio&gt;</code> y <code>&lt;video&gt;</code> para integrar contenido multimedia sin necesidad de plugins adicionales.</li>
          <li><strong>Gráficos y Animaciones:</strong> Introducción del <code>&lt;canvas&gt;</code> para gráficos dinámicos y soporte para SVG (Scalable Vector Graphics).</li>
          <li><strong>APIs y Almacenamiento Local:</strong> APIs como geolocalización, drag-and-drop, y almacenamiento local (<code>localStorage</code> y <code>sessionStorage</code>).</li>
          <li><strong>Mejor Semántica:</strong> Nuevas etiquetas semánticas como <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;nav&gt;</code>, y <code>&lt;aside&gt;</code> que mejoran la estructura y accesibilidad del contenido web.</li>
          <li><strong>Formularios Mejorados:</strong> Nuevos tipos de input y atributos para formularios, facilitando la validación y la interacción del usuario.</li>
        </ul>
      </div>

      <div className="mb-6 ">
        <h2 className="text-xl  font-semibold mb-2">6. HTML5.1 y HTML5.2</h2>
        <p>
          <strong>HTML5.1 (2016):</strong> Introdujo mejoras y refinamientos en las especificaciones de HTML5, abordando algunos problemas y añadiendo nuevas capacidades como el atributo <code>picture</code> para imágenes adaptativas.
        </p>
        <p>
          <strong>HTML5.2 (2017):</strong> Continuó mejorando sobre HTML5.1 con pequeñas actualizaciones y mejoras en la seguridad y privacidad, así como en la interoperabilidad de las aplicaciones web.
        </p>
      </div>

      <div>
        <h2 className="text-xl  font-semibold mb-2">Conclusión</h2>
        <p>
          HTML ha recorrido un largo camino desde su creación en 1991. Ha evolucionado para adaptarse a las necesidades cambiantes de la web, pasando de ser un simple lenguaje de marcado a una plataforma rica y multifacética que soporta aplicaciones complejas y multimedia. HTML5, la versión actual, es robusta, flexible y se ha convertido en el estándar para el desarrollo web moderno, fomentando la interoperabilidad y accesibilidad de las aplicaciones web en múltiples dispositivos y navegadores.
        </p>
        <p>
          Este recorrido histórico muestra cómo HTML ha sido fundamental en el desarrollo y crecimiento de la web, permitiendo una mejor estructura, accesibilidad y experiencia de usuario a lo largo de las décadas.
        </p>
      </div>
    </section>
  );
};

export default History;
