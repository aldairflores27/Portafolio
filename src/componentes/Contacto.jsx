import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

export default function Contacto() {
  return (
    <section id="contacto" className="bg-gray-800 text-yellow-300 py-20 px-6 border-2 border-yellow-400">
      <div className="max-w-xl mx-auto backdrop-blur-lg bg-gray-900 border-2 border-yellow-400 rounded-2xl p-8 shadow-xl transition-all duration-300 text-yellow-300">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-8 text-center drop-shadow">Contacto</h2>

        <div className="space-y-5 text-base md:text-lg">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-indigo-400 text-xl" />
            <a
              href="mailto:aldair.flores0604@gmail.com"
              className="hover:text-indigo-300 transition-colors duration-200"
            >
              aldair.flores0604@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-indigo-400 text-xl" />
            <a
              href="mailto:00795135@red.unid.mx"
              className="hover:text-indigo-300 transition-colors duration-200"
            >
              00795135@red.unid.mx
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <FaPhone className="text-indigo-400 text-xl" />
            <a
              href="tel:9811084188"
              className="hover:text-indigo-300 transition-colors duration-200"
            >
              981 108 4188
            </a>
          </div>

        
          <div className="flex items-center space-x-3">
            <FaGithub className="text-indigo-400 text-xl" />
            <a
              href="https://github.com/aldairflores27/Portafolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300 transition-colors duration-200"
            >
              github.com/miportafolio
            </a>
          </div>
        </div>

        <p className="text-sm text-center text-gray-400 mt-10">
          © 2025 Jesús Antonio Aldair Martínez Flores. Todos los derechos reservados.
        </p>
      </div>
    </section>
  );
}
