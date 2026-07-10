import { useState } from 'react';
import './App.css';
import Encabezado from './components/Encabezado';
import Partido from './components/Partido';

function App() {
  const [jornada, setJornada] = useState([
    { id: 1, local: "México", visitante: "Brasil" }
  ]);
  const [nuevoLocal, setNuevoLocal] = useState('');
  const [nuevoVisitante, setNuevoVisitante] = useState('');

  const agregarPartido = (e) => {
    e.preventDefault();
    if (!nuevoLocal.trim() || !nuevoVisitante.trim()) return;

    const nuevoPartido = {
      id: Date.now(),
      local: nuevoLocal,
      visitante: nuevoVisitante
    };

    setJornada([...jornada, nuevoPartido]);
    setNuevoLocal('');
    setNuevoVisitante('');
  };

  const finalizarPartido = (id) => {
    setJornada(jornada.filter(partido => partido.id !== id));
  };

  return (
    <div className="app-container">
      <Encabezado />
      
      <form onSubmit={agregarPartido} className="form-container">
        <input 
          type="text" 
          className="form-input"
          placeholder="Equipo Local" 
          value={nuevoLocal}
          onChange={(e) => setNuevoLocal(e.target.value)}
        />
        <input 
          type="text" 
          className="form-input"
          placeholder="Equipo Visitante" 
          value={nuevoVisitante}
          onChange={(e) => setNuevoVisitante(e.target.value)}
        />
        <button type="submit" className="btn-agregar">Agregar</button>
      </form>

      {jornada.map((partido) => (
        <Partido 
          key={partido.id} 
          id={partido.id}
          equipoLocal={partido.local} 
          equipoVisitante={partido.visitante} 
          onFinalizar={finalizarPartido} 
        />
      ))}
    </div>
  );
}

export default App;