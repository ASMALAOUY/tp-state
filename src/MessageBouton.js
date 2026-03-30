import { useState } from 'react';
import './MessageBouton.css';
function MessageBouton() {
  const [message, setMessage] = useState('Cliquez sur le bouton');

  function changerMessage() {
    setMessage('Vous avez cliqué sur le bouton !');
  }

  return (
    <div className="message-bouton">
      <p>{message}</p>

      <button onClick={changerMessage}>Cliquer</button>
    </div>
  );
}

export default MessageBouton;