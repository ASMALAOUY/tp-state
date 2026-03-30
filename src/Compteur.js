import { useState } from 'react';
import './Compteur.css';
function Compteur() {
  const [compte, setCompte] = useState(0);

  return (
    <div className="compteur"> 
      <p>Vous avez cliqué {compte} fois.</p>
      <button onClick={() => setCompte(compte + 1)}>
        Incrémenter
      </button>
    </div>
  );
}
export default Compteur;