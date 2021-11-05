import React from 'react'
import {GlobalContext} from './Context'

const Search = () => {
    const {setSearch} = GlobalContext()
    return (
        <div>
            <input type='text' placeholder='Search'/>
        </div>
    )
}

export default Search
