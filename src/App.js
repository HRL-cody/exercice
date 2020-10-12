import React, {useState} from 'react';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import './App.css';


function App() {


  const [text, setChange] = useState('');
  const  TextChange = (e) => {
    setChange(e.target.value);
  }

  console.log(text)
  
  return (
    <div className="App">
      <InputGroup size="lg"onChange={TextChange} >
    <InputGroup.Prepend >
      <InputGroup.Text id="inputGroup-sizing-lg" >Large </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  <h2>{text}</h2>
    </div>
  );
}

export default App;
