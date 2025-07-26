import { useState } from 'react';

export default function Habilidades() {
  const [mostrarHabilidades, setMostrarHabilidades] = useState(false);

  const habilidades = [
    'HTML',
    'CSS',
    'Python',
    'C#',
    'VirtualBox',
    'JavaScript',
    'Android Studio',
    'Kotlin (App Móvil)',
    'React',
    'Tailwind CSS',
    'Firebase',
    'Firestore',
    'Node.js',
    'Windows Server 2019',
    'MySQL',
    'Git & GitHub',
    'Diseño Responsivo',
    'Control de versiones',
    'Vite',
    'Figma',
    'SCRUM',
    'Visual Studio Code',
    'Trabajo en equipo',
  ];

  return (
    <section id="habilidades" className="bg-gray-800 py-20 px-4 text-center border-2 border-yellow-400">
      <h2 className="text-4xl font-bold text-yellow-400 mb-8 drop-shadow">Habilidades</h2>

      <button
        onClick={() => setMostrarHabilidades(!mostrarHabilidades)}
        className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition shadow-lg"
      >
        {mostrarHabilidades ? 'Ocultar habilidades' : 'Ver habilidades'}
      </button>

      {mostrarHabilidades && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-10">
          {habilidades.map((habilidad, index) => (
            <div
              key={index}
              className="bg-gray-900 text-yellow-300 py-4 px-6 rounded-lg shadow-lg hover:scale-105 transition border-2 border-yellow-400"
            >
              {habilidad}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
