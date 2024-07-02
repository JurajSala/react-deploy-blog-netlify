import React from 'react';
import { Link } from 'react-router-dom';
import api from "./api/posts.js"

export const  About = ({articles,setArticles}) => {
 

  const handleDelete = async (id)=>{
    try {
      await api.delete(`/about/${id}`);
      setArticles( articles.filter( article =>article.id !== id) );
      
     }catch (err) {
        console.log(`error:${err.message}`);
     }

  }
  return (
    <main className='shadow container-fluid col-10 offset-1 p-3'> 
    {  articles.length ?
      <>
          <div className='row'>
            <h1 className='text-center col-10'>
              O nás
            </h1> 
            <Link className='btn btn-info col-2' to="/about/new">Napiš článek</Link>
          </div>
          <hr />
              {
                articles.map( article =>
                  <div className='bg-secondary text-light p-3 m-2' key={article.id}>
                    <h1 className='h3 offset-2'>{article.head}</h1>
                    <p className='col-8 offset-2'>
                        {article.article}
                    </p>
                  { article.img &&  <img alt="obrazek" src={article.img} className='img img-fluid img-thumbnail img-border w-50 p-3 offset-2'/>}
                  { article.video && <div className="embed-responsive embed-responsive-16by9  offset-2 w-100 py-3">                              
                                        <iframe className="border embed-responsive-item col-6"  height="400px" src={ article.video } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>   
                                        </iframe> 
                                                                 
                                    </div>  
                  }
                  <div className='row'>
                    <button onClick={()=> handleDelete(article.id)} className='btn btn-danger col-2 offset-9'>
                          Odstranit
                    </button> 
                  </div>
                    <hr/>
                  </div>
                  )
              
              }
      </>
        : <p className='col text-center p-3'>
                 Nebyla nalezen žádný příspěvek.
         </p> }
       
    </main>
  )
}
