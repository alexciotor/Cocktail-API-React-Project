import {useState,useEffect } from 'react'
import Cocktails from './cocktails'
import Loading from './loading'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
const baseURL ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

function App() {
  const [menu,setMenu] =useState([])
  const [loading, setLoading] =useState(false)
  const getData = async()=>{
    setLoading(true)
    const data = await fetch(URL)
    const response = await data.json()
    setMenu(response.drinks)
    setLoading(false)
  }
 
  useEffect(()=>{
    getData()
  },[])
  
  
  if(loading){
    return <Loading/>
  }
  return (

<main>
<div className="title">
<h1> Best Cocktails</h1>
</div>
<div className="underline"></div>
<div className="input">
<input placeholder="Search your favorite Cocktail" className='inputs' type="text"/>
</div>
<div className="main-content">
<Cocktails  menu={menu}/>

</div>

</main>

  );
}

export default App;
