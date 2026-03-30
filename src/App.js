import Compteur from './Compteur';
import MessageBouton from './MessageBouton';
import FormulaireNom from './FormulaireNom';
import CompteurEffet from './CompteurEffet';
import AffichageDynamique from './AffichageDynamique';
import FormulaireInscription from './FormulaireInscription';
import CompteurTitre from './CompteurTitre';
import './App.css';

import './Exercices.css';  

function App() {
  return (
    <div>
      <h1>Composants de base</h1>
      <Compteur />
      <hr />
      <MessageBouton />
      <hr />
      <FormulaireNom />
      <hr />
      <CompteurEffet />
      <hr />
      {/* Section des exercices avec le CSS spécifique */}
      <div className="exercices-section">
        <div className="exercices-divider">
          <span>EXERCICES PRATIQUES </span>
        </div>
        
        {/* Exercice 1 */}
        <div className="exercice-card exercice-1">
          <div className="exercice-badge">Exercice 1</div>
          <h2 className="exercice-title">Affichage dynamique</h2>
          <div className="exercice-instruction">
            💡 Cliquez sur le bouton pour changer le texte dynamiquement
          </div>
          <AffichageDynamique />
        </div>
        
        {/* Exercice 2 */}
        <div className="exercice-card exercice-2">
          <div className="exercice-badge">Exercice 2</div>
          <h2 className="exercice-title">Formulaire d'inscription</h2>
          <div className="exercice-instruction">
            📝 Remplissez le formulaire et soumettez pour voir les données
          </div>
          <FormulaireInscription />
        </div>
        
        {/* Exercice 3 */}
        <div className="exercice-card exercice-3">
          <div className="exercice-badge">Exercice 3</div>
          <h2 className="exercice-title">Compteur avec effet personnalisé</h2>
          <div className="exercice-instruction">
            🔄 Cliquez pour incrémenter - Le titre de la page change automatiquement
          </div>
          <CompteurTitre />
        </div>
      </div>
    </div>
  );
}

export default App;