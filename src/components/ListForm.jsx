import {Fragment} from 'react'

const ListForm = ({registro}) => {
    return (  
        <Fragment>
            
            <div className='container'>
            <h1 style={{textAlign: 'center'}} className ='bg-success' >Ingresos</h1>
            <table className="table table-success table-striped">
            <thead>
              <tr>
                
                <th>ID</th>
                <th>Concepto</th>
                <th>Monto</th>
                <th>Fecha</th>
                

              </tr>
            </thead>

            <tbody>
                {registro.map( registro => (

                <tr key={registro.idRegistro}>
                                
                                <td>{registro.idRegistro}</td>
                                <td>{registro.Concepto}</td>
                                <td>{registro.Monto}</td>
                                <td>{registro.Fecha}</td>
                                
                                <td className="center">
                                    <button className="btn btn-warning ">Edit</button>

                                    <button className="btn btn-danger ">Delete</button>
                                </td>
                </tr>
                    
                ))}

                

            </tbody>
          </table>

          <div className='container'>

          </div>

          <h1 style={{textAlign: 'center'}} className ='bg-danger' >Egresos</h1>
            <table className="table table-danger table-striped">
            <thead>
              <tr>
                
                <th>ID</th>
                <th>Concepto</th>
                <th>Monto</th>
                <th>Fecha</th>
                

              </tr>
            </thead>

            <tbody>
              
                <tr key = "">
                  <td>concepto</td>
                  <td>monto</td>
                  <td>fecha</td>
                  <td>tipoE</td>
                  <td className="center">
                    <button className="btn btn-warning ">Edit</button>

                    <button className="btn btn-danger ">Delete</button>
                  </td>
                </tr>        

            </tbody>
          </table>

          </div>
        </Fragment>
        

    );
}
 
export default ListForm;