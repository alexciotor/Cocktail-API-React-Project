import React from 'react'
import {Link} from 'react-router-dom'
const Cocktails=({menu})=>{
return <>
<main>
<div className="title">
<h1> Best Cocktails</h1>
</div>
<div className="underline"></div>
 
<div className="main-content">


{menu.map(item=>{
   const {idDrink:id,strDrink,strCategory,strDrinkThumb,strIngredient1,strIngredient2,strIngredient3,strGlass
} =item

return <Link to='singledrink'> <article key={id} onClick={()=>{
    localStorage.setItem('drink', id)  
}} className='article'>
 
<img src={strDrinkThumb} alt="" className="img"/>
<span className='drink-name' >{strDrink}</span>
</article>   </Link>


})}
</div>
</main>
</>
}

export default Cocktails