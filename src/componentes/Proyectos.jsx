export default function Proyectos() {
  return (
    <section id="proyectos" className="py-16 px-6 bg-gray-800 text-yellow-400 border-2 border-yellow-400">
      <h3 className="text-3xl font-semibold text-center mb-10 drop-shadow">Mis Proyectos</h3>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        
        {/* Proyecto 1 */}
        <div className="bg-gray-900 rounded-lg shadow-lg p-6 border-2 border-yellow-500 hover:scale-105 transition">
          <img
            src="/src/assets/ParkAmigo.jpg"
            alt="ParkAmigo"
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h4 className="text-xl font-bold text-yellow-300 mb-2">ParkAmigo</h4>
          <p className="text-gray-300 mb-4">
            Sistema de reservación de espacio para estacionamiento, permite que los usuarios se registren y tengan los beneficios de nuestra software.
            Este proyecto cuenta con App Movil y Escritorio
          </p>
          <div className="flex gap-3">
            <a
              href="https://github.com/AlejandroMV03/Park-Amigo-V2.0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 transition"
            >
              Ver código
            </a>
          
          </div>
        </div>

   {/* Proyecto 2 */}
        <div className="bg-gray-900 rounded-lg shadow-lg p-6 border-2 border-yellow-500 hover:scale-105 transition">
          <img
            src="/src/assets/RRHH.jpg" 
            alt="RRHH"
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h4 className="text-xl font-bold text-yellow-300 mb-2">RRHH</h4>
          <p className="text-gray-300 mb-4">
           Pagina de Recursos Humanos que permite ver información , crear empleados asi como eliminar , editar y guardar cambios
          </p>
          <div className="flex gap-3">
            <a
              href="https://github.com/aldairflores27/RRHH-main/tree/nueva-version-de-rrhh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 transition"
            >
              Ver código
            </a>
          
          </div>
        </div>

      </div>
    </section>
  );
}
