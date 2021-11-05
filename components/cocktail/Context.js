import {createContext, useState, userReducer, useContext, useEffect} from 'react'
import axios from 'axios'


 const url ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
export const AppContext = createContext()
export const Appprovider = ({children})=>{
   
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('a')
    const [cocktails, setCocktails] = useState([])


    const fetchDrinks = async()=>{
        // setLoading(true)
        try{
          const response = await fetch(`${url}${search}`)
          const data = await response.json()
          console.log(data)
          const {drinks} = data
          if(drinks){
            const newCocktails = drinks.map((drink)=>{ 
              const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = drink
               return {id: idDrink, name: strDrink, image: strDrinkThumb, alcohol: strAlcoholic, glass: strGlass} 
              
            })
            setCocktails(newCocktails)
          }else{
              setCocktails([])
              setLoading(false)
          }
         
        } catch(error){
            console.log(error)
            setLoading(false)
        }
     
    }

    useEffect(() => {
      fetchDrinks()
    }, [search])

    const value = {loading, search, setSearch, cocktails }
    return(
        <div>
                <AppContext.Provider value={value}>
                    {children}
                </AppContext.Provider>
        </div>

 )
}


export const GlobalContext = ()=>{
    return  useContext(AppContext)
}