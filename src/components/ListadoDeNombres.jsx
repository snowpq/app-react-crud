import React, { useState } from 'react'


const ListadoDeNombres = () => {


  const [concepto, setconcepto] = useState('')
  const [monto, setmonto] = useState(0)
  const [fecha, setfecha] = useState('')
  const [tipoE, settipoE] = useState('')

  const [listaNombre, setlistaNombre] = useState([])

  const guardaDate = (e) => {
    e.preventDefault()
    const nuevoRegistro = {
      id: id,
      concepto: concepto,
      monto: monto,
      fecha: fecha,
      tipoE: tipoE
    }
    setlistaNombre([...listaNombre, nuevoRegistro])
    e.target.reset();
  }



  return (
    <>

      <div className="row">

        <div className="col">

          <h2>Formulario de Registro</h2>

          <form className="form-group" onSubmit={(e) => guardaDate(e)}>
            <div>

              <label> Concepto </label>
              <input
                type="text"
                className="form-control mb-3"
                onChange={(e) => { setconcepto(e.target.value) }}
              />

            </div>

            <div>

              <label> Monto </label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Monto"
                onChange={(e) => { setmonto(e.target.value) }}
                />
            </div>

            <div>
              <label> Fecha </label>
              <input
                type="date"
                className="form-control mb-3"
                onChange={(e) => { setfecha(e.target.value) }}
              />

            </div>

            <div>
              
              <label className="ml-1 p-3"> Tipo </label>

              <select class="form-select" onChange={(e) => { settipoE(e.target.value) }} >
                <option selected></option>
                <option value="Ingreso">Ingreso</option>
                <option value="Egreso">Egreso</option>
              </select>
            </div>


            <input
              type="submit"
              value="Registro de operacion"
              className="btn btn-info btn-block" />
          </form>

        </div>

        <div className="col">
          <h2>Listado de operaciones registradas</h2>


          <table className="table">
            <thead>
              <tr>
                <th>Concepto</th>
                <th>Monto</th>
                <th>Fecha</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>{
              
              listaNombre.length > 0 ? 
              listaNombre.map(item => (


                <tr key = {item.id}>
                  <td>{item.concepto}</td>
                  <td>{item.monto}</td>
                  <td>{item.fecha}</td>
                  <td>{item.tipoE}</td>
                  <td className="center">
                    <button className="btn btn-warning ">Edit</button>

                    <button className="btn btn-danger ">Delete</button>
                  </td>
                </tr>

              )) : (

                <tr>
                  <td>Sin registros</td>
                  
                </tr>
              )


            }

            </tbody>
          </table>






        </div>
      </div>

    </>


  )
}

export default ListadoDeNombres
