
import ListadoDeNombres from "./components/ListadoDeNombres";
import {useEffect, useState} from 'rea-----------ct'

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
      <ListadoDeNombres></ListadoDeNombres>
     
    
    </div>
  );
}


export default App;
