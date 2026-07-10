import { useState } from 'react';
import styles from './Partido.module.css';

function Partido({ id, equipoLocal, equipoVisitante, onFinalizar }) {
  const [golesLocal, setGolesLocal] = useState(0);
  const [golesVisitante, setGolesVisitante] = useState(0);

  return (
    <div className={styles.card}>
      <h3>{equipoLocal} vs {equipoVisitante}</h3>
      
      <h2>{golesLocal} - {golesVisitante}</h2>
      
      <div className={styles.scoreContainer}>
        <button className={styles.btnGoal} onClick={() => setGolesLocal(golesLocal + 1)}>
          +1 Gol {equipoLocal}
        </button>
        
        <button className={styles.btnGoal} onClick={() => setGolesVisitante(golesVisitante + 1)}>
          +1 Gol {equipoVisitante}
        </button>
      </div>

      <button className={styles.btnFinish} onClick={() => onFinalizar(id)}>
        Finalizar Partido
      </button>
    </div>
  );
}

export default Partido;