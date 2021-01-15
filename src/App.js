import {useState,useEffect } from 'react'
import Cocktails from './cocktails'
import Loading from './loading'
import SingleDrink from './singleDrink'
import Error from './error'
 import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom'
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
 
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
  return <Router> 
<Switch>
<Route exact path='/'>
<Cocktails  menu={menu}/>
</Route>
<Route path='/singledrink' >
<SingleDrink menu={menu} />
</Route>

<Route path='*'>
<Error/>
</Route>
</Switch>

 
</Router>
  ;
}

export default App;
