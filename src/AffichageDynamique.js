import { useState } from 'react';

function AffichageDynamique() {
  const [texte, setTexte] = useState('Premier clic');
  const [clicCount, setClicCount] = useState(1);

  function handleClick() {
    const messages = ['Premier clic', 'Deuxième clic', 'Troisième clic'];
    const nextCount = (clicCount % 3) + 1;
    setTexte(messages[nextCount - 1]);
    setClicCount(nextCount);
  }

  return (
    <div>
      <p>{texte}</p>
      <button onClick={handleClick}>Cliquer pour changer le texte</button>
    </div>
  );
}

export default AffichageDynamique;