import { useState  } from "react";

export const AddCategory = ({ onNewCategory }) => {
    // Estado con los datos de entrada
    const [ inputValue , setInputValue ] = useState('');


    // Evento que captura el valor del input
    const onInputChange = ({ target }) =>{
        setInputValue( target.value );
    }

    const onSubmit = ( event ) =>{
        // Cancela el evento sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
        event.preventDefault();

        // Trim elimina los espacios en blanco al principio y al final de una cadena
        if( inputValue.trim().length <= 1) return;

        setInputValue('');
        onNewCategory( inputValue.trim());
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    ) 
};