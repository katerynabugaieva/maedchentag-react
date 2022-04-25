import React from 'react';
import './Facebook.css'

function Facebook() {
  return (
    <form className="login-form-facebook">
        <h1 id="titleFb">facebook</h1>
        <div className='inputDivFb'>

      <input
        className='inputsFb'
        type="text"
        placeholder="E-Mail-Adresse oder Telefonnummer"
        name="username"
        required
     
      />
</div>
<div className='inputDivFb'>
      <input
        className='inputsFb'
        type="text"
        placeholder="Password"
        name="password"
        required
      
      />
</div>
<div className='submitButtonDivFb'>
      <button type="submit" id='submitButtonFb'>Anmelden</button>
      </div>

     <div className='linkDivFb'> <a className='linkFb' href='validLink'>Passwort vergessen?</a>
     </div>
      <hr className='dividerFb'/>
      <div className='submitButtonDivFb'>
      <button className='forgotButtonFb'>Neues Konto erstellen</button>
      </div>
    </form>
   
  );
};

export default Facebook