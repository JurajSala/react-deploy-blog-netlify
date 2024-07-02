import React from 'react'
import {Feed} from './Feed'
export const  Home =({posts, fetchError, isLoading}) =>{
  return (
    <main className='row'>

      {isLoading && 
      <div className='col-4 offset-4 text-center p-5'>
              <div className="spinner-border" role="status">
                  <span className="sr-only"></span>
              </div>
      </div>
      }
      { !isLoading  && fetchError && <p className='h3 text-center p-5 text-danger'>{fetchError}</p>

      }
      { !isLoading && !fetchError && ( posts.length ? (
        <Feed posts={posts}/>
      )
      :(
         <p className='col text-center p-3'>
            Nebyla nalezena žádná pošta.
         </p>
       )
       )}
        
    </main>
  )
}
