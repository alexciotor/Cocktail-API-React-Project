import React  from 'react'
import {Link} from 'react-router-dom'
const SingleDrink =({menu})=>{
    const drinkId = localStorage.getItem('drink')
let abc =[]
 let bca= menu.map(item=>{
    if(item.idDrink===drinkId){
      abc.push(item)
      return
    }
})
return <>
{abc.map(item=>{
    console.log(item);
      const {idDrink:id,strCategory:cat,strDrink:name, strGlass: glass, strIngredient1:ingr1,strIngredient2:ingr2,strIngredient3:ingr3, strDrinkThumb:image, strInstructions:instr }=item
      let ingred=[ingr1,ingr2,ingr3]

      return <article key={id} className="single-article">
      
      <div className="single-container">
      <img className='single-imge' src={image} alt=""/>
      
      <header className="single-header">
      <div className="single-details">
      <h1>{name}</h1>
      <p>{instr}</p>
      </div>  
     
      <h4 className='list'>{cat}</h4>
      <ul className="list">
      {ingred.map((item,index)=>{
        if(!item){
          return
        }
        else{
       return <li key={index} className='list'>{item}</li>}
      })}
      </ul>
      </header>
      </div>
      </article>
})}
<div className="button">
 <Link to='/'> <button className="btn">Return</button></Link>
</div>
</>
    
 
 
}



export default SingleDrink