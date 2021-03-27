
import { useEffect, useState } from 'react'
import FormReg from "./components/FormReg";
import ListForm from './components/ListForm';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Balance from './components/Balance';




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

    
      
  
      <Router>
      <div className='btn-group'>

    <Link to='/' className='btn btn-dark'>
          Home
    </Link>

    <Link to='/reg' className='btn btn-success'>
          Registros
    </Link>

    </div>
      <Switch>

        <Route path='/' exact>

        <Balance></Balance>

        <ListForm registro={registro} setlistUpdated={setlistUpdated} reg={reg}></ListForm>

        </Route>

        <Route path='/reg'>
      
              <FormReg reg={reg} setreg={setreg}></FormReg>

              <ListForm registro={registro} setlistUpdated={setlistUpdated} reg={reg}></ListForm>
                  
        </Route>
      
      
      </Switch>
      
      
      

      </Router>
      





    </div>
  );
}


export default App;
