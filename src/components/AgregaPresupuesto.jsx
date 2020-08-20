import React,{useState} from 'react';

const AgregaPresupuesto = ({Presupuesto,SetAsignado ,setRestante ,SetPresupuesto}) => {

    const [MessageError,setMessage]=useState('');

    const ChangePresupuesto = (e) => {

        let valor=parseInt( e.target.value );
        
        if(valor<50)
        {
            document.getElementsByClassName('Message_Content')[0].style.color="rgb(79, 1, 1)";
            setMessage('Presupuesto bajo...');
        }
        else if(valor>50&&valor<200)
        {
            document.getElementsByClassName('Message_Content')[0].style.color="rgb(178, 181, 0)";
            setMessage('Presupuesto ajustado...');
        }
        else if(valor>200)
        {
            document.getElementsByClassName('Message_Content')[0].style.color="rgb(1, 32, 1)";
            setMessage('Presupuesto bueno...');
        }

        SetPresupuesto(valor);
    }

    //Sumit Define Presupuesto
    const SavePresupuesto= e => {
        
        e.preventDefault();
      
        //Validacion
        if(Presupuesto < 1 || isNaN(Presupuesto)){
            
            setMessage('Presupuesto No Valido');
            document.getElementsByClassName('Message_Content')[0].style.color="red";
            return;
        }

        //Si pasa la validacion
        setMessage('');
        SetPresupuesto(Presupuesto);
        setRestante(Presupuesto);
        SetAsignado(true);
    }

    return(

        <div className="Content_Form">

            <span className="titulo_Metodo_presupuesto">
                Coloca tu presupuesto
            </span>
            
            <div className="Message_Content">
                {MessageError}
            </div>

            <form onSubmit={SavePresupuesto}>
                <input type="number" className="input_presupuesto" onChange={ChangePresupuesto}/>
                <input type="submit" className="input_presupuesto btn_presupuesto" ></input>
            </form>

        </div>
    )

}

export default  AgregaPresupuesto;