import './App.css';
import stateList from './stateData'
import {useState} from 'react'
import DropDown from './components/dropDown'
import Abbreviation from './components/abbreviation';


function App() {
  let stateOptions = stateList
  const [myState, setMyState] = useState('')
  const [myAbbreviation, setMyAbbreviation] = useState('')

  return (
    <div className='App'>
      <h2>State Abbreviator</h2>
      <input 
          type="text" 
          value={myState}
          placeholder='Choose State'
          readOnly={true}
          id="userInput"
        />
      <span className="dropdown">
        <DropDown 
          setMyState={setMyState}
          setMyAbbreviation={setMyAbbreviation}
          stateOptions={stateOptions} 
        />
        {myState && <Abbreviation myAbbreviation={myAbbreviation} />}
      </span>
    </div>
  );
}

export default App;
