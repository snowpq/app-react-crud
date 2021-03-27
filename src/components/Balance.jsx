

const Balance = ({ reg, registro, setlistUpdated }) => {


let registroIng = registro.filter(registro => registro.Tipo === "Ingreso") 

let registroEgr = registro.filter(registro => registro.Tipo === "Egreso")

let sumaIng = 0
let sumaEgr = 0

for (let cuenta of registroIng){

    sumaIng+= cuenta.Monto

        }
for (let cuenta of registroEgr){

    sumaEgr+= cuenta.Monto
        
                }

let balanz = sumaIng - sumaEgr


    return (  
        <> 

        <h1 style={{textAlign: 'center'}} className='bg-dark color-warning' >Blance actual {balanz}</h1>
        
        
        </>
    )
}
 
export default Balance;

