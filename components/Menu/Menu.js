import React from 'react'
import { useState } from 'react'
import Category from '../Category/Category'
import Menuitems from '../MenuItems/Menuitems'
import styles from './Menu.module.scss'
import {data} from './data'



const allcategories=['all',  ...new Set(data.map((payload)=>(
    payload.category
)))]


const Menu = () => {
    const [payloads, setPayloads] = useState(data)
   const [categories, setcategories] = useState([])// when this changes
   const [tags, setTags] = useState(allcategories)// when this changes
   console.log(tags)
  
   console.log(data)

   const handlefilter=(tag)=>{
       console.log(tag)

    if(tag==='all'){
        setPayloads(data)
        return
    }
    const check = data.filter((item)=>{ 
        return item.category === tag
       
    })
console.log(check)
    setPayloads(check)
   }
    

  return (// everything under the return rerenders. this is the view.
        <div>
            <Category handlefilter={handlefilter} tags={tags}/>
                
          
          {
              data.map((payload)=>(
                  <Menuitems payload={payload} key={payload.id}/>
              ))
          }
        </div>
    )
}

export default Menu
