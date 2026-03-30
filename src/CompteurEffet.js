import { useState, useEffect } from 'react';
import './CompteurEffet.css';

function CompteurEffet() {
  const [compte, setCompte] = useState(0);

  useEffect(() => {
    console.log(`Le compteur est à ${compte}`);
  }, [compte]); 

  return (
    <div className="compteur-effet"> 
      <p>Compteur : {compte}</p>  {/* Affiche la valeur */}
      <button onClick={() => setCompte(compte + 1)}>
        Incrémenter avec effet
      </button>
    </div>
  );
}

export default CompteurEffet;