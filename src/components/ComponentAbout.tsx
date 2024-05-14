// AcercaDe.js

import React from 'react';

const AcercaDe = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-6">Sobre Cursos YEIIDH</h2>
        <p className="text-lg mb-8">
          En Cursos YEIIDH, nuestro objetivo es proporcionar una plataforma educativa de calidad para estudiantes de todos los niveles. Nos esforzamos por ofrecer una amplia variedad de cursos impartidos por expertos en sus campos, que cubren desde los fundamentos hasta temas avanzados en diversas áreas de interés.
        </p>
        <p className="text-lg mb-8">
          Nos enorgullece ofrecer una experiencia de aprendizaje dinámica y colaborativa, donde los estudiantes pueden acceder a recursos de alta calidad, participar en discusiones interactivas y avanzar en su camino hacia el dominio de nuevos conocimientos y habilidades.
        </p>
        <p className="text-lg mb-8">
          Estamos comprometidos a apoyar el crecimiento personal y profesional de nuestros estudiantes, y esperamos acompañarte en tu viaje de aprendizaje.
        </p>
        {/* Agregar un video si lo deseas */}
        {/* <div className="aspect-w-16 aspect-h-9">
          <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Acerca de Cursos YEIIDH" allowFullScreen />
        </div> */}
      </div>
    </div>
  );
};

export default AcercaDe;
