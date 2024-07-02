import React from 'react'
import { useNavigate } from 'react-router-dom';

export const NewPost = ({
  handleSubmit, title, setTitle, body, setBody, componentTitle
}) =>{

  const navigate = useNavigate();
  
  return (
    <main className='shadow container-fluid p-5 my-5 col-11'>
        <h1 className='text-center py-3'>{componentTitle}</h1>
        <form onSubmit={(e)=> {
          handleSubmit(e);
          navigate("/");
        }
          } className='form-group'>
           <label htmlFor="title" className="form-label">Title:</label>
           <input
              required
              id="title"
              type="text"
              placeholder='Zadej titul'
              className='form-control'
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
           />

           <label htmlFor='body' className='form-label'>Dopis:</label>
           <textarea
              required
              id="body"
              placeholder='Napiš dopis'
              className='form-control'
              value={body}
              onChange={(e)=>setBody(e.target.value)}

           />

           <button type='submit' className='btn btn-info m-2'> Uložit</button>

        </form>
    </main>
  )
}
