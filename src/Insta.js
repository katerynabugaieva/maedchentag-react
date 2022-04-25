import React, { useState } from 'react';
import './Insta.css'
import './RMV.css'

function Insta () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  console.log('Username:', username, 'Passwort:', password)
  const submit = e => {
    e.preventDefault();
    alert('Ich bin drin!')
  };

  return (
    <form onSubmit={submit} className="login-form-insta">
        <div className='inputDivFb'>
            <img src='instagram.png' alt='insta'/>
        </div>
      
        <div className='inputDivRM'>
            <input
                className="inputsI"
                type="text"
                name="username"
                required
                placeholder="E-Mail"
                onChange={e => setUsername(e.target.value)}
            />
        </div>

        <div className="inputDivRM">
            <input
                className="inputsI"
                type="password"
                placeholder="Passwort"
                name="password"
                required
                onChange={e => setPassword(e.target.value)}
            />
        </div>

        <div className='submitButtonDivRM'>
            <button id='submitButtonI'>Anmelden</button>
        </div>

        <div className='submitButtonDivRM'>
            <a id='vergessenI' href='validString'>Passwort vergessen?</a>
        </div>

    <h4>resultat</h4>
    </form>
   
  );
};

export default Insta