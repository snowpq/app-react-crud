import {Fragment} from 'react'

const ListForm = () => {
    return (  
        <Fragment>
            
            
            <h1>Ingresos</h1>
            <table className="table">
            <thead>
              <tr>
                
                <th>Concepto</th>
                <th>Monto</th>
                <th>Fecha</th>
                <th>Tipo</th>

              </tr>
            </thead>

            <tbody>

                <tr key ="">
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

          <h1>Egresos</h1>
            <table className="table">
            <thead>
              <tr>
                
                <th>Concepto</th>
                <th>Monto</th>
                <th>Fecha</th>
                <th>Tipo</th>

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
        </Fragment>
        

    );
}
 
export default ListForm;