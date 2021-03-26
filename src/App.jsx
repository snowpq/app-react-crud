
import { useEffect, useState } from 'react'
import FormReg from "./components/FormReg";
import ListForm from './components/ListForm';
//import Balance from './components/Balance';



function App() {

  const [reg, setreg] = useState({

    Concepto: '',
    Monto: 0,
    Fecha: '',
    Tipo: ''

  })

  const [registro, setregistros] = useState([])

  const [listUpdated, setlistUpdated] = useState(false)

  useEffect(() => {

    const getReg = () => {
      fetch('http://localhost:9000/api')
        .then(res => res.json())
        .then(res => setregistros(res))
    }
    getReg()

    setlistUpdated(false)

  }, [listUpdated])


  return (
    <div className="container">

      {/* <h1 style={{textAlign: 'center'}}>Este es el Home</h1>
      
      <Balance></Balance>
       */}

      <FormReg reg={reg} setreg={setreg}></FormReg>

      <ListForm registro={registro} setlistUpdated={setlistUpdated}></ListForm>





    </div>
  );
}


export default App;
