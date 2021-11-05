import React from 'react'

const Category = ({handlefilter, tags}) => {
   
    return (
        <div>
           {
               tags.map((tag)=>(
                    <p className='ml-2' onClick={()=>{handlefilter(tag)}}>{tag}</p> 
                   
               ))
               
           }
        </div>
    )
}

export default Category
