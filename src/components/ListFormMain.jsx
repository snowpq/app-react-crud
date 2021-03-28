import { Fragment } from 'react'

const ListForm = ({registro}) => {

let init = 0
let fin = 10
let registroMod = []


const ultimosDiez = registro => {

  
    let dif = registro.length - 10       
    let a = dif + init
    let b = dif + fin
    let registroMod = registro.slice(a,b)

return registroMod
}

registro.length < 10 ? (registroMod = registro.slice(init,fin)):(registroMod = ultimosDiez(registro)) 


       
    return (
        <Fragment>

            <div className='container'>
                <h1 style={{ textAlign: 'center' }} className='p-2 bg-secondary' >Ultimos 10 Registros</h1>
                <table className="table table-secondary table-striped table-bordered">
                    <thead>
                        <tr>                           
                            <th>Concepto</th>
                            <th>Monto</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>

                    <tbody>
                          
                           {                                    
                                    registroMod.map(registro => ( 
                                                    
                                                    <tr key={registro.idRegistro}>
                                                            <td>{registro.Concepto}</td>
                                                            <td>{registro.Monto}</td> 
                                                            <td>{registro.Fecha}</td>                           
                                                    </tr>
                            
                                                    )               
                                       )
                                
                           
                            }

                    </tbody>


                </table>              

            </div>
        </Fragment>


    );
}

export default ListForm;