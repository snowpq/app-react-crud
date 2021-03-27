

const FormReg = ({reg, setreg, registro}) => {


    const handleChange = (e) =>{

        setreg({
            ...reg,
            [e.target.name]: e.target.value
        })
    }

    let {Concepto, Monto, Fecha, Tipo } = reg

    const handleSubmit = () =>{

        Monto = parseInt(Monto, 10)

     if(Concepto === '' || Monto <= 0 ||Fecha === '' || Tipo === ''){

        alert('Todos los campos son obligatorios')

        return
     }

        //Consulta
        const requestInit = {
            method:'post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(reg)
        }
        fetch('http://localhost:9000/api', requestInit)
            .then(res => res.text())
            .then(res => console.log(res))


            //Reinicio State del libro
            setreg({
                Concepto: '',      
                Monto: 0,
                Fecha:'',
                Tipo:''
            })


    }


    return ( 
       
       <div>

            <h1 style={{textAlign: 'center'}} className ='p-2 bg-dark text-warning' >Registro de Operaciones</h1>

          <form 
                className="form-group"
                onSubmit={handleSubmit}
                >
            
            <div className='mb-3'>

              <label htmlFor='Concepto' className='form-label'> Concepto </label>
              <input
                value={Concepto}
                name='Concepto'
                id='Concepto'
                type="text"
                className="form-control"
                onChange={handleChange}
              />

            </div>

            <div className='mb-3'>

              <label  htmlFor='Monto' className='form-label'> Monto </label>
              <input
                value={Monto}
                name='Monto'
                id='Monto'
                type="text"
                className="form-control"
                onChange={handleChange}
                
                />
            </div>

            <div className='mb-3'>
              <label htmlFor='Fecha' className='form-label'> Fecha </label>
              <input
                value={Fecha}
                name='Fecha'
                id='Fecha'
                type="date"
                className="form-control"
                onChange={handleChange}
              />

            </div>

            <div className='mb-3'>

            <label  htmlFor='Tipo' className='form-label'> Tipo </label>
                    <input
                    value={Tipo}
                    name='Tipo'
                    id='Tipo'
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    
                    />
</div>

            <button
            className='btn btn-primary'
            
            >Registrar</button>
            
          </form>


        </div>

     );
}
 
export default FormReg;











