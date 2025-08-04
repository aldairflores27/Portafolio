import React from 'react';
import NavBar from './componentes/NavBar';
import Presentacion from './componentes/Presentacion';
import Habilidades from './componentes/Habilidades';
import Proyectos from './componentes/Proyectos';
import Devblogs from './componentes/Devblogs';
import Contacto from './componentes/Contacto';
import PieDePagina from './componentes/PieDePagina';
import Comentarios from './componentes/Comentarios'; 

function App() {
  return (
    <>
      <NavBar />
      <Presentacion />
      <Habilidades />
      <Proyectos />
      <Devblogs />
      <Contacto />
      <Comentarios /> 
      <PieDePagina />
    </>
  );
}

export default App;
