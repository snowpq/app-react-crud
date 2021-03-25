const FormReg = () => {
    return ( 
        <>

            <h1 style={{textAlign: 'center'}} className ='bg-dark text-warning' >Formulario de Registro</h1>

          <form className="form-group">
            <div>

              <label> Concepto </label>
              <input
                type="text"
                className="form-control mb-3"
                
              />

            </div>

            <div>

              <label> Monto </label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Monto"
                
                />
            </div>

            <div>
              <label> Fecha </label>
              <input
                type="date"
                className="form-control mb-3"
                
              />

            </div>

            <div>
              
              <label className="ml-1 p-3"> Tipo </label>

              <select class="form-select" >
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

        </>

     );
}
 
export default FormReg;











