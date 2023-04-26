import { useState } from 'react';
import './App.css';
import JSONDATA from './MOCK_DATA.json'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="App">
      <input type='text' placeholder='Search...' className='input' onChange={(event) => {
        setSearchTerm(event.target.value)
      }}></input>
      {JSONDATA.filter((val) => {
        if(searchTerm === ""){
          return val
        }else if(val.first_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
          return val
        }
      }).map((val, key) => {
        return <div className='user' key={key}>
            <p className='para'>{val.first_name}</p>
          </div>
      })}
    </div>
  );
}

export default App;
