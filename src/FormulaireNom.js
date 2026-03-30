import { useState } from 'react';
import './FormulaireNom.css'
function FormulaireNom() {
  const [nom, setNom] = useState('');

  function handleChange(event) {
    setNom(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Le nom saisi est : ${nom}`);
  }

  return (
    <form onSubmit={handleSubmit} className="formulaire-nom">
      <input value={nom} onChange={handleChange} />
      <button type="submit">Soumettre</button>
    </form>
  );
}
export default FormulaireNom