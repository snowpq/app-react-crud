import { Fragment } from 'react'

const ListForm = ({ reg, registro, setlistUpdated }) => {


    let registroIng = registro.filter(registro => registro.Tipo === "Ingreso" )

    let registroEgr = registro.filter(registro => registro.Tipo === "Egreso" )


    

    const handleUpdate = id => {

    const requestInit = {
        method:'put',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(reg)
        
    } 
    fetch('http://localhost:9000/api/'+ id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setlistUpdated(true)

}

const handleDelete= id =>{

    const requestInit = {
        method:'delete',
        
    }
    fetch('http://localhost:9000/api/'+ id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setlistUpdated(true)
}

    return (
        <Fragment>

            <div className='container'>
                <h1 style={{ textAlign: 'center' }} className='p-2 bg-success' >Ingresos</h1>
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

                        {registroIng.map(registro => ( 



                            <tr key={registro.idRegistro}>

                                <td>{registro.idRegistro}</td>
                                <td>{registro.Concepto}</td>
                                <td>{registro.Monto}</td>
                                <td>{registro.Fecha}</td>

                                
                                <td>
                                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                    
                                    
                                    <button onClick={()=> handleUpdate(registro.idRegistro)} type="button" className="btn btn-warning">Update</button>
                                    <button onClick={()=> handleDelete(registro.idRegistro)} type="button" className="btn btn-danger">Delete</button>
                                    
                                    </div>
                                </td>
                                

                            </tr> 

                        ))}


                    </tbody>


                </table>

                <div className='container'>

                </div>

                <h1 style={{ textAlign: 'center' }} className='p-2 bg-danger' >Egresos</h1>
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

                        {registroEgr.map(registro => ( 



                            <tr key={registro.idRegistro}>

                            <td>{registro.idRegistro}</td>
                            <td>{registro.Concepto}</td>
                            <td>{registro.Monto}</td>
                            <td>{registro.Fecha}</td>


                            <td>
                                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                
                                
                                <button onClick={()=> handleUpdate(registro.idRegistro)} type="button" className="btn btn-warning">Update</button>
                                <button onClick={()=> handleDelete(registro.idRegistro)} type="button" className="btn btn-danger">Delete</button>
                                
                                </div>
                            </td>

                            </tr> 

                        ))}

                    </tbody>
                </table>

            </div>
        </Fragment>


    );
}

export default ListForm;