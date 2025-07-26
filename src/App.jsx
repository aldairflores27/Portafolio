import NavBar from './componentes/NavBar'
import Presentacion from './componentes/Presentacion'
import Habilidades from './componentes/Habilidades'
import Proyectos from './componentes/Proyectos'
import Contacto from './componentes/Contacto'
import PieDePagina from './componentes/PieDePagina'

export default function App() {
  return (
    <>
      <NavBar />
      <Presentacion />
      <Habilidades/>
      <Proyectos />
      <Contacto />
      <PieDePagina />
    </>
  );
}
