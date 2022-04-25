
import './App.css';
import Facebook from './Facebook';
import Tiktok from './Tiktok';

import RMV from './RMV'
import Technical from './Technical';
import Insta from './Insta';
import { useState } from 'react';

function App() {
  const [facebook, setFacebook] = useState(false);
  const [tiktok, setTiktok] = useState(false);
  const [rmv, setRmv] = useState(false);
  const [howitwas, setHowitwas] = useState(false);
  const [howitis, setHowitis] = useState(false);
  const handleCheckboxChange = (event) => {
    if(event.target.value ==='facebook') setFacebook(!facebook)
    if(event.target.value ==='tiktok') setTiktok(!tiktok)
    if(event.target.value ==='rmv') setRmv(!rmv)
    if(event.target.value ==='howitwas') setHowitwas(!howitwas)
    if(event.target.value ==='howitis') setHowitis(!howitis)
  };

  return (
    <div className="App">
      <div>
        <input type="checkbox" id="facebook" name="facebook" value="facebook" onChange={(event)=>handleCheckboxChange(event)}/>Facebook
        <input type="checkbox" id="ticktok" name="ticktok" value="tiktok" onChange={handleCheckboxChange}/>TikTok
        <input type="checkbox" id="RMV" name="RMV" value="rmv" onChange={handleCheckboxChange}/>RMV
        <input type="checkbox" id="Howitwas" name="Howitwas" value="howitwas" onChange={handleCheckboxChange}/>How it was
        <input type="checkbox" id="Howitis" name="Howitis" value="howitis" onChange={handleCheckboxChange}/>How it is

      </div>
      <div className='container'>
      {facebook && <Facebook />}
      {tiktok && <Tiktok /> }
      {rmv && <Technical />}
     
      {howitwas && <RMV />}
      {howitis &&  <Insta/>}
      </div>
    </div>
  );
}

export default App;
