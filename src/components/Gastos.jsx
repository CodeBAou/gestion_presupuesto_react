import React,{useState} from 'react';
import GastoNota from '../components/GastoNota';
import { v4 as uuidv4 } from 'uuid';

const Gastos = ({restante, Presupuesto, SetPresupuesto, setRestante}) => {

    const [gastoNombre,SetGastoNombre] = useState('Otro Gasto');
    const [gastoValor,SetGastoValor] = useState(0);
    const [gastos,setGasto] = useState([]);

    const ChangeData = (e) => {
        
        switch(e.target.name)
        {
            case 'nombre_gasto':
                SetGastoNombre(e.target.value);
                break;
            case 'valor_gasto':
                SetGastoValor(e.target.value);
                break;
        }
    }

    const SaveGasto = (e) => {

        e.preventDefault();
        let resta=restante-gastoValor;

        //Cambia el color a blanco[ >1/2 ] - amarrillo[ >1/3 & <= 1/2 ] o rojo[ <= 1/3 ]
        if(resta<=Presupuesto/2&&resta>Presupuesto/3)
        {
            document.getElementById('dato_restanteID').style.color="yellow";
        }
        else if(resta<=Presupuesto/3)
        {
            document.getElementById('dato_restanteID').style.color="red";
        }
        //Asigna Nombre por defecto al gasto si el usuario no puso ninguno
        if(gastoNombre == '' ||gastoNombre == null || gastoNombre == undefined)
        {
            SetGastoNombre('Otro Gasto');
        }

        //Añade un Gasto a la coleccion
        setGasto([...gastos,{
            id:uuidv4(),
            nombre:gastoNombre,
            valor:gastoValor
        }]);

        setRestante(resta);
    }

    return (
        <div className="Content_Form_gastos">

            <div className="content_Set_Gasto">

                <form className="fgastos" onSubmit={SaveGasto}>

                    <label className="labelGastos">Nombre Gasto</label>
                    <input name="nombre_gasto" className="inputGastos" type="text" onChange={ChangeData}/>
                    <label className="labelGastos">Cantidad Gasto</label>
                    <input name="valor_gasto" className="inputGastos" type="text" onChange={ChangeData}/>
                    <input className="inputGastosBTN" type="submit" value="Añadir gasto"/>

                </form>

            </div>

            <div className="content_List_Gasto">

                <div className="balance">

                    <label className="data">Total</label>
                    <label className="data">Restante</label>
                    <label className="data green">{Presupuesto}</label>
                    <label className="data" id="dato_restanteID">{restante}</label>

                </div>

                <div className="Listado">
                   {
                        gastos.map( gastoOBJ => (
                            <GastoNota 
                                key={gastoOBJ.id}
                                nombre={gastoOBJ.nombre}
                                valor={gastoOBJ.valor}
                            />
                        ))
                   }
                </div>

            </div>

        </div>
    )
}

export default Gastos;