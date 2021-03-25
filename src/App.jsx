
import {useEffect, useState} from 'react'
import Home from "./components/Home";
import FormReg from "./components/FormReg";
import ListForm from './components/ListForm';
import Balance from './components/Balance';



function App() {

  const [registros, setregistros] = useState([])

  useEffect(() => {
    
    const getReg = () => {
      fetch('http://localhost:3000/api')
      .then(res => res.json())
      .then(res => setregistros(res))
    }
    getReg()
  }, [])


  return (
    <div className="container">
      
      <h1>Este es el Home</h1>
      
      <Balance></Balance>
      
      <FormReg></FormReg>
      
      <ListForm></ListForm>
      
      
      
     
    
    </div>
  );
}


export default App;
