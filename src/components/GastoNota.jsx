import React from 'react';

const GastoNota = ({nombre, valor, colorAviso}) => {
    
    return(

        <div className="GastoNota">
            <label>{nombre}: 
                <span className="red marginleft10">{valor}</span>€
            </label> 
        </div>

    )
}

export default GastoNota;