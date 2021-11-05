import React from 'react'
import {GlobalContext} from './Context'
import Loading from './Loading'
import SingleCocktail from './SingleCocktail'


const Cocktaillist = () => {
    const {loading, cocktails} = GlobalContext()
    console.log(cocktails)
    if(loading){
        console.log(loading)
       return  <Loading/>
    }

    if(cocktails.length<1){
        return <h2>No Cocktails matched your search.</h2>
    }

    return (
        <div>
            <h2>cocktails</h2>
            <div>
                {
                    cocktails.map((item)=>{
                        return <SingleCocktail/>
                    })
                }
            </div>
        </div>
    )
}

export default Cocktaillist
