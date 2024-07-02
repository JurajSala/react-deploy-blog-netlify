import React from 'react'
import { Link } from 'react-router-dom'

export const Missing = () => {
  return (
    <div className='container'>
       <h2 className='text-center py-3'>Stránka nenalezena!!</h2>
                <p className='text-center'> To je nám líto.</p>
                <div className='d-flex justify-content-center'>
                  < Link to="/" className='btn btn-info' >Navštivte naší stránku</Link>
                </div>
    </div>
  )
}
