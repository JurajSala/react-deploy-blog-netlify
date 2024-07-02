import React from 'react'
import { FaLaptop,FaMobileAlt, FaTabletAlt} from 'react-icons/fa'

export const Header = ({title, width}) => {
  return (
    <header className='row bg-info'>
        <h1 className='h1 text-center p-3  col-11'>{title}</h1>
        <span className='col-1'>
          { width < 768 ? <FaMobileAlt className='text-center'/>
                : width < 992 ? <FaTabletAlt/> 
                      : <FaLaptop/>}
        </span>
    </header>
  )
}

