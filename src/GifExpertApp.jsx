import { useState } from 'react'
import { AddCategory , GifGrid} from './components';


export const GifExpertApp = () => {
  // Estado con las categorias buscadas
  const [ categories , setCategories ] = useState(['Jujutsu Kaisen']);

  // Agregar Categoria
  const onAddCategory = (newCategory) => {
    // El método includes() determina si un array incluye un determinado elemento y devuelve true o false dependiendo si se encuentra o no.
    if( categories.includes(newCategory) ) return;

    // operador Spread para propagar y añadir el nuevo elemento
    setCategories([newCategory, ...categories]);
  }

  return (
   <>
    <h1>GifExpert App</h1>

     {/* componente que recibe como parametro la funcion onNewCategory*/}
      <AddCategory  onNewCategory={ (value)=>onAddCategory(value)  }/>

     {
        categories.map((category)=> (
          <GifGrid key={ category } category={ category }/>)
      )} 

   </>
  )
}

