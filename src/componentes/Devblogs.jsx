export default function Devblogs() {
  return (
    <section id="Devblogs" className="py-16 px-6 bg-gray-800 text-yellow-400 border-2 border-yellow-400">
      <h3 className="text-3xl font-semibold text-center mb-10 drop-shadow">DEVBLOGS</h3>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        
        {/* Blog 1 */}
        <div className="bg-gray-900 rounded-lg shadow-lg p-6 border-2 border-yellow-500 hover:scale-105 transition">
          <img
            src="/src/assets/blog1.jpg"
            alt="blog1"
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h4 className="text-xl font-bold text-yellow-300 mb-2">Usando Tailwind en React</h4>
          <p className="text-gray-300 mb-4">
           Video blogs sobre como usar Tailwind CSS en React !
          </p>
          <div className="flex gap-3">
            <a
              href="https://youtu.be/Y_vkNHymKsY"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 transition"
            >
             Ver video
            </a>
          
          </div>
        </div>

   {/* blog 2 */}
        <div className="bg-gray-900 rounded-lg shadow-lg p-6 border-2 border-yellow-500 hover:scale-105 transition">
          <img
            src="/src/assets/blog2.jpg" 
            alt="Login"
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h4 className="text-xl font-bold text-yellow-300 mb-2">Login GOOGLE AUTH</h4>
          <p className="text-gray-300 mb-4">
         Video tutorial como implementar Google Auth en tu proyecto react , usando Firebase .
          </p>
          <div className="flex gap-3">
            <a
              href="https://youtu.be/OBiECNzpTYI"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 transition"
            >
             Ver video
            </a>
          
          </div>
        </div>
  {/* Blog 3 */}
        <div className="bg-gray-900 rounded-lg shadow-lg p-6 border-2 border-yellow-500 hover:scale-105 transition">
          <img
            src="/src/assets/blog3.jpg"
            alt="...."
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h4 className="text-xl font-bold text-yellow-300 mb-2">RRHH basico</h4>
          <p className="text-gray-300 mb-4">
           Videotutorial pagina RRHH basico usando Google Auth , React , Tailwind y firebsae
          </p>
          <div className="flex gap-3">
            <a
              href="https://youtu.be/6iDCuo0EavA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 transition"
            >
             Ver video
            </a>
          
          </div>
        </div>
         {/* Blog 4 */}
        <div className="bg-gray-900 rounded-lg shadow-lg p-6 border-2 border-yellow-500 hover:scale-105 transition">
          <img
            src="/src/assets/blog4.jpg"
            alt="...."
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h4 className="text-xl font-bold text-yellow-300 mb-2">SERVI +</h4>
          <p className="text-gray-300 mb-4">
          Videotutorial donde se explica como hacer una pagina web para tu empresa , en este caso un ejemplo de SERVI+, donde se muestran servidos y productos tecnologicos
          </p>
          <div className="flex gap-3">
            <a
              href="https://youtu.be/c_Yflj1FUss"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 transition"
            >
             Ver video
            </a>
          
          </div>
        </div>
         {/* Blog 5 */}
        <div className="bg-gray-900 rounded-lg shadow-lg p-6 border-2 border-yellow-500 hover:scale-105 transition">
          <img
            src="/src/assets/blog5.jpg"
            alt="...."
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h4 className="text-xl font-bold text-yellow-300 mb-2">RRHH "opcionempleado"</h4>
          <p className="text-gray-300 mb-4">
           Video de RRHH avanzadom donde se muestra la configuracion de la pagina de RRHH donde se pueden crear empleados, editar, eliminar y guardad informacion, haciendo uso del CRUD y de las herrmanientas de firebase
          </p>
          <div className="flex gap-3">
            <a
              href="https://youtu.be/Tly6Th8eu0g"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 transition"
            >
             Ver video
            </a>
          
          </div>
        </div>
        {/* Blog 6 */}
        <div className="bg-gray-900 rounded-lg shadow-lg p-6 border-2 border-yellow-500 hover:scale-105 transition">
          <img
            src="/src/assets/blog6.jpg"
            alt="...."
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h4 className="text-xl font-bold text-yellow-300 mb-2">RRHH FINAL</h4>
          <p className="text-gray-300 mb-4">
        Video de RRHH usando nuevos diseños de interfaces, asi mismo usando CRUD  y herrmanientas de firebase, React, Tailwind, etc
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.youtube.com/watch?v=_8KhnDafzaU"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 transition"
            >
             Ver video
            </a>
          
          </div>
        </div>
      </div>
    </section>
  );
}
