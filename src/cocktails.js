const Cocktails=({menu})=>{
return <>
{menu.map(item=>{
   const {idDrink,strDrink,strCategory,strDrinkThumb,strIngredient1,strIngredient2,strIngredient3,strGlass
} =item

return <article className='article'>
<a href={'./singledrink.html'} target="_blank">
<img src={strDrinkThumb} alt="" className="img"/>
<span className='drink-name' >{strDrink}</span></a>
</article>   


})}


</>
}

export default Cocktails