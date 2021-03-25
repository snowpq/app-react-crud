
import {useEffect, useState} from 'react'
import FormReg from "./components/FormReg";
import ListForm from './components/ListForm';
//import Balance from './components/Balance';



function App() {

  const [registro, setregistros] = useState([])

  useEffect(() => {
    
    const getReg = () => {
      fetch('http://localhost:9000/api')
      .then(res => res.json())
      .then(res => setregistros(res))
    }
    getReg()
  }, [])


  return (
    <div className="container">
      
      {/* <h1 style={{textAlign: 'center'}}>Este es el Home</h1>
      
      <Balance></Balance>
       */}
     
      <FormReg></FormReg>
      
      <ListForm registro={registro}></ListForm>
      
      
      
     
    
    </div>
  );
}


export default App;
