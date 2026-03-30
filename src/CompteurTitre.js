import { useState, useEffect } from 'react';

function CompteurTitre() {
  const [clics, setClics] = useState(0);

  useEffect(() => {
    document.title = `Nombre de clics : ${clics}`;
  }, [clics]);

  return (
    <div>
      <p>Vous avez cliqué {clics} fois</p>
      <button onClick={() => setClics(clics + 1)}>
        Incrémenter
      </button>
    </div>
  );
}

export default CompteurTitre;