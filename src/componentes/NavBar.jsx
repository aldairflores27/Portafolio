export default function NavBar() {
  return (
    <nav className="bg-gray-800 shadow p-4 flex justify-between items-center sticky top-0 z-10 border-b-2 border-yellow-400 text-yellow-300">
      <h1 className="text-xl font-bold text-yellow-400 drop-shadow">BIENVENIDO A MI PORTAFOLIO</h1>
      <div className="space-x-4">
        <a href="#inicio" className="text-yellow-300 hover:text-yellow-400">Inicio</a>
        <a href="#habilidades" className="text-yellow-300 hover:text-yellow-400">Habilidades</a>
        <a href="#proyectos" className="text-yellow-300 hover:text-yellow-400">Proyectos</a>
      </div>
    </nav>
  );
}
