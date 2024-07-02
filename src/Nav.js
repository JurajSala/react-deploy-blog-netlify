import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = ({search,setSearch}) => {
  return (
    <nav className='row bg-dark text-warning px-3'>
        <form onSubmit={(e)=> e.preventDefault()} className='col-12 col-lg offset-lg-2 form-group p-3 align-items-center'>
           <label htmlFor='search' className='form-lebel text-center'>Search Post</label>
           <input 
              id='search' 
              type="text"
              placeholder='Search Post'
              value={search}
              onChange={(e)=>{setSearch(e.target.value)}}
              className='form-control'
           />
        </form>
        <ul className='col list-inline my-3 d-flex align-items-center justify-content-center'>
          <li className='list-inline-item text-center'> <Link to="/" className='btn btn-primary'>Domů</Link> </li>
          <li className='list-inline-item text-center'> <Link to="/post" className='btn btn-primary'>Nová pošta</Link> </li>
          <li className='list-inline-item text-center'><Link to="/about" className='btn btn-primary'>O nás</Link></li>
        </ul>
    </nav>
  )
}
