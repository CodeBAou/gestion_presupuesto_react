import React,{useState} from 'react';
import '../assets/css/ApiControlPresupuesto.css';
import AgregaPresupuesto from '../components/AgregaPresupuesto';
import Gastos from './Gastos';

//import Gastos from '../components/Gastos';

const ApiControlPresupuesto= () => {

    const [Presupuesto,SetPresupuesto]=useState(0);
    const [restante,setRestante] = useState(0);
    const [asignado,SetAsignado]=useState(false);

    return(

        <div className="Content_Api">

            <h1 className="Titulo_Api">Gasto Semanal</h1>

            {asignado === false 
            
            ?  
                <AgregaPresupuesto
                    Presupuesto = {Presupuesto}
                    setRestante = {setRestante}
                    SetPresupuesto = {SetPresupuesto}
                    SetAsignado = {SetAsignado} 
                />
            :    
                <Gastos 
                    restante = {restante}
                    Presupuesto = {Presupuesto}
                    SetPresupuesto = {SetPresupuesto}
                    setRestante = {setRestante}
                />
            }
        </div>
    )
}

export default ApiControlPresupuesto;
