import { Fragment } from 'react'

const ListForm = ({ registro, setlistUpdated }) => {



const handDelete= id =>{

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
                <h1 style={{ textAlign: 'center' }} className='bg-success' >Ingresos</h1>
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

                        {registro.map(registro => (



                            <tr key={registro.idRegistro}>

                                <td>{registro.idRegistro}</td>
                                <td>{registro.Concepto}</td>
                                <td>{registro.Tipo}</td>
                                <td>{registro.Fecha}</td>

                                <td className="center">
                                    <button className="btn btn-warning ">Edit</button>
                                    <button onClick={()=> handDelete(registro.idRegistro)} className="btn btn-danger ">Delete</button>
                                </td>

                            </tr>

                        ))}


                    </tbody>


                </table>

                <div className='container'>

                </div>

                <h1 style={{ textAlign: 'center' }} className='bg-danger' >Egresos</h1>
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

                        {registro.map(registro => (



                            <tr key={registro.idRegistro}>

                                <td>{registro.idRegistro}</td>
                                <td>{registro.Concepto}</td>
                                <td>{registro.Tipo}</td>
                                <td>{registro.Fecha}</td>

                                <td className="center">
                                    
                                    <div className='mb-3'>
                                        
                                        <button className="btn btn-warning ">Edit</button>
                                        <button className="btn btn-danger ">Delete</button>

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