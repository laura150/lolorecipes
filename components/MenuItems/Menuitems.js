import React from 'react'
import styles from './Menuitems.module.scss'

const Menuitems = ({payload}) => {
    return (
        <div>
        <div className='flex items-center mb-4'>
            <img src={payload.file} width="150"/>
            <p>{payload.name}</p>
        </div>
        </div>
    )
}

export default Menuitems
