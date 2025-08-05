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
  const [respuestaEditando, setRespuestaEditando] = useState(null);
  const [comentarioRespondiendoId, setComentarioRespondiendoId] = useState(null);
  const [nombreRespuesta, setNombreRespuesta] = useState('');
  const [textoRespuesta, setTextoRespuesta] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'Comentarios'), (snapshot) => {
      const datos = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setComentarios(datos.sort((a, b) => b.fecha?.seconds - a.fecha?.seconds));
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !comentario) return;

    if (editandoId) {
      await updateDoc(doc(db, 'Comentarios', editandoId), {
        nombre,
        comentario,
        fecha: serverTimestamp()
      });
      setEditandoId(null);
    } else {
      await addDoc(collection(db, 'Comentarios'), {
        nombre,
        comentario,
        fecha: serverTimestamp(),
        likes: 0,
        respuestas: []
      });
    }

    setNombre('');
    setComentario('');
  };

  const handleEliminar = async (id) => {
    await deleteDoc(doc(db, 'Comentarios', id));
  };

  const handleEditar = (coment) => {
    setNombre(coment.nombre);
    setComentario(coment.comentario);
    setEditandoId(coment.id);
  };

  const handleLike = async (id, currentLikes) => {
    await updateDoc(doc(db, 'Comentarios', id), {
      likes: (currentLikes || 0) + 1
    });
  };

  const handleResponder = (id) => {
    setComentarioRespondiendoId(id);
    setNombreRespuesta('');
    setTextoRespuesta('');
  };

  const handleEnviarRespuesta = async (comentarioId) => {
    if (!nombreRespuesta || !textoRespuesta) return;

    const comentario = comentarios.find(c => c.id === comentarioId);
    const nuevasRespuestas = [...(comentario.respuestas || []), {
      nombre: nombreRespuesta,
      texto: textoRespuesta,
      fecha: new Date().toISOString()
    }];

    await updateDoc(doc(db, 'Comentarios', comentarioId), {
      respuestas: nuevasRespuestas
    });

    setComentarioRespondiendoId(null);
    setNombreRespuesta('');
    setTextoRespuesta('');
  };

  const handleEliminarRespuesta = async (comentarioId, index) => {
    const comentario = comentarios.find(c => c.id === comentarioId);
    const nuevasRespuestas = [...(comentario.respuestas || [])];
    nuevasRespuestas.splice(index, 1);

    await updateDoc(doc(db, 'Comentarios', comentarioId), {
      respuestas: nuevasRespuestas
    });
  };

  const handleEditarRespuesta = (comentarioId, index, texto) => {
    setRespuestaEditando({ comentarioId, index, texto });
  };

  const handleGuardarRespuesta = async () => {
    const { comentarioId, index, texto } = respuestaEditando;
    const comentario = comentarios.find(c => c.id === comentarioId);
    const nuevasRespuestas = [...(comentario.respuestas || [])];

    nuevasRespuestas[index] = {
      ...nuevasRespuestas[index],
      texto
    };

    await updateDoc(doc(db, 'Comentarios', comentarioId), {
      respuestas: nuevasRespuestas
    });

    setRespuestaEditando(null);
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

            <div className="mt-1 space-x-2 text-sm">
              <button onClick={() => handleEditar(coment)} className="text-blue-600 hover:underline">Editar</button>
              <button onClick={() => handleEliminar(coment.id)} className="text-red-600 hover:underline">Eliminar</button>
              <button onClick={() => handleResponder(coment.id)} className="text-purple-600 hover:underline">Responder</button>
              <button onClick={() => handleLike(coment.id, coment.likes)} className="text-green-600 hover:underline">
                Like ({coment.likes || 0})
              </button>
            </div>

            {/* Formulario de respuesta visual */}
            {comentarioRespondiendoId === coment.id && (
              <div className="mt-2 space-y-2">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full p-1 border rounded"
                  value={nombreRespuesta}
                  onChange={(e) => setNombreRespuesta(e.target.value)}
                />
                <textarea
                  placeholder="Escribe tu respuesta"
                  className="w-full p-1 border rounded"
                  value={textoRespuesta}
                  onChange={(e) => setTextoRespuesta(e.target.value)}
                />
                <div className="flex justify-end space-x-2 text-sm">
                  <button
                    onClick={() => handleEnviarRespuesta(coment.id)}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    Enviar
                  </button>
                  <button
                    onClick={() => setComentarioRespondiendoId(null)}
                    className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}

            {/* Mostrar respuestas */}
            {coment.respuestas && coment.respuestas.length > 0 && (
              <div className="ml-4 mt-2 space-y-2">
                {coment.respuestas.map((resp, idx) => (
                  <div key={idx} className="text-sm text-gray-700 border-l-2 pl-2">
                    {respuestaEditando &&
                      respuestaEditando.comentarioId === coment.id &&
                      respuestaEditando.index === idx ? (
                        <>
                          <textarea
                            className="w-full p-1 border border-gray-400 rounded"
                            value={respuestaEditando.texto}
                            onChange={(e) =>
                              setRespuestaEditando({ ...respuestaEditando, texto: e.target.value })
                            }
                          />
                          <div className="space-x-2 mt-1 text-xs">
                            <button
                              onClick={handleGuardarRespuesta}
                              className="text-green-600 hover:underline"
                            >
                              Guardar
                            </button>
                            <button
                              onClick={() => setRespuestaEditando(null)}
                              className="text-gray-600 hover:underline"
                            >
                              Cancelar
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <p>
                            <span className="font-semibold text-blue-700">
                              {resp.nombre || 'Anónimo'}:
                            </span>{' '}
                            {resp.texto}
                          </p>
                          <div className="space-x-2 text-xs mt-1">
                            <button
                              onClick={() => handleEditarRespuesta(coment.id, idx, resp.texto)}
                              className="text-blue-600 hover:underline"
                            >
                              Editar
                            </button>
                            <button
                              onClick={() => handleEliminarRespuesta(coment.id, idx)}
                              className="text-red-600 hover:underline"
                            >
                              Eliminar
                            </button>
                          </div>
                        </>
                      )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
