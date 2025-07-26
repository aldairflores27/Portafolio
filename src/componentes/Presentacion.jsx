import { useState } from 'react';
import miFoto from '../assets/yo.jpg'; // Asegúrate de tener la imagen correctamente ubicada

export default function Presentacion() {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  return (
    <section
      id="inicio"
      className="bg-gray-800 py-20 px-6 text-center flex flex-col items-center border-2 border-yellow-400"
    >
      <img
        src={miFoto}
        alt="Foto de Aldair"
        className="w-40 h-40 rounded-full object-cover border-4 border-yellow-400 mb-6 shadow-md"
      />

      <h2 className="text-4xl font-bold text-yellow-400 mb-4">
        Jesús Antonio Aldair Martínez Flores
      </h2>

      <p className="text-lg text-white max-w-xl">
        Desarrollador Frontend apasionado por crear interfaces modernas y funcionales.
      </p>

      <div className="mt-6 flex flex-col gap-4 items-center">
        <button
          onClick={() => setMostrarInfo(!mostrarInfo)}
          className="px-6 py-2 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-300 transition font-semibold shadow"
        >
          {mostrarInfo ? 'Ocultar información' : 'Ver información'}
        </button>

        {mostrarInfo && (
          <div className="mt-4 max-w-xl text-white bg-gray-900 p-4 rounded-xl border border-yellow-400 shadow-lg text-left">
            <p>
              Hola, soy <strong>Aldair Flores</strong>, tengo <strong>21 años</strong> de edad.
              Actualmente estudio en la <strong>Universidad UNID</strong>, la carrera de <strong>Ingeniería en Software y Sistemas Computacionales</strong>.
            </p>
            <p className="mt-3">
              Me gusta mucho la tecnología y siempre he pensado que día a día puede utilizarse para <strong>fines productivos</strong> y <strong>facilitar la vida humana</strong>.
            </p>
          </div>
        )}
      </div>

      <a href="#proyectos">
        <button className="mt-8 px-6 py-2 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-300 transition font-semibold shadow">
          Ver Proyectos
        </button>
      </a>
    </section>
  );
}
