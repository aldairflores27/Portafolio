import { useState, useEffect } from 'react';
import { db } from './FirebaseConfig';
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp
} from 'firebase/firestore';

export default function Comentarios() {
  const [nombre, setNombre] = useState('');
  const [comentario, setComentario] = useState('');
  const [comentarios, setComentarios] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  // Leer comentarios en tiempo real
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'Comentarios'),
      (snapshot) => {
        const datos = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setComentarios(datos.sort((a, b) => b.fecha?.seconds - a.fecha?.seconds));
      }
    );
    return () => unsubscribe();
  }, []);

  // Crear o actualizar comentario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !comentario) return;

    if (editandoId) {
      // Actualizar
      await updateDoc(doc(db, 'Comentarios', editandoId), {
        nombre,
        comentario,
        fecha: serverTimestamp()
      });
      setEditandoId(null);
    } else {
      // Crear
      await addDoc(collection(db, 'Comentarios'), {
        nombre,
        comentario,
        fecha: serverTimestamp()
      });
    }

    setNombre('');
    setComentario('');
  };

  // Eliminar comentario
  const handleEliminar = async (id) => {
    await deleteDoc(doc(db, 'Comentarios', id));
  };

  // Editar comentario
  const handleEditar = (coment) => {
    setNombre(coment.nombre);
    setComentario(coment.comentario);
    setEditandoId(coment.id);
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Deja un comentario</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Tu nombre"
          className="w-full p-2 border rounded"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <textarea
          placeholder="Tu comentario"
          className="w-full p-2 border rounded"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">
          {editandoId ? 'Guardar cambios' : 'Enviar comentario'}
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Comentarios recientes</h3>
        {comentarios.length === 0 && <p className="text-gray-500">No hay comentarios aún.</p>}

        {comentarios.map((coment) => (
          <div key={coment.id} className="border-b py-2">
            <p className="font-bold">{coment.nombre}</p>
            <p>{coment.comentario}</p>
            <div className="mt-1 space-x-2">
              <button
                onClick={() => handleEditar(coment)}
                className="text-blue-600 hover:underline"
              >
                Editar
              </button>
              <button
                onClick={() => handleEliminar(coment.id)}
                className="text-red-600 hover:underline"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
