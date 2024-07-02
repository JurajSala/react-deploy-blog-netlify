import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

export const PostPage = ({posts, handleDelete}) => {
  const {id} = useParams();
  const post= posts.find((post)=> post.id.toString() === id);
  const navigate=useNavigate();
  return (
    <main className='shadow container-fluid p-5 my-5 col-11'>
        <article>
           {post &&
             < >
                <h1 className='text-center py-3'>{post.title}</h1>
                <p className='text-center'>{post.datetime}</p>
                <p className='col-8 offset-2 p-3 border'>{post.body}</p>
                <div className='col-8 offset-2 d-flex justify-content-start'>
                    <button 
                       className="btn btn-danger my-3 mx-1" 
                       onClick={ () => {
                         handleDelete(post.id); 
                         navigate("/");
                        }
                      }
                    >
                          Odstranit
                    </button>
                    <Link to={`/edit/${post.id}`} className="btn btn-warning my-3 mx-1">Editovat</Link>
                </div>
             </>
           }
           {!post &&
             < >
                <h2 className='text-center py-3'>Pošta nenalezena</h2>
                <p className='text-center'> Je nám líto.</p>
                <div className='d-flex justify-content-center'>
                  < Link to="/" className='btn btn-info' >Zpět na poštu</Link>
                </div>
             </>
           }
        </article>
    </main>
  )
}
