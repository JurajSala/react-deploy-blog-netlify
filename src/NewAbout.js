import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from "./api/posts";

export const NewAbout = ({articles,setArticles}) => {
  const [head,setHead] = useState("");
  const [article,setArticle] = useState("");
  const [img,setImg] = useState("");
  const [video,setVideo] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
       e.preventDefault();
       let id = articles.length ? parseInt(articles[articles.length-1].id)+1 : 1;
       id = id.toString();

       const newArticle = {
          id,
          head:head,
          article:article, 
          img:img, 
          video:video
       };
       try{
          const response= await api.post( "/about", newArticle);

          const newAbout = [...articles, response.data];
          setArticles(newAbout);
          setHead("");
          setArticle("");
          setImg("");
          setVideo("");
          navigate("/about")
       }catch(err){
          console.log(`Error>${err.message}`)
    }
  }

  return (
    <main className='shadow container-fluid p-5 my-5 col-11'>
        <h1></h1>
        <form onSubmit={(e)=> {
            handleSubmit(e);
            navigate("/about");
          }
        } className='form-group'>
          <label htmlFor="head" className="form-label">Hlavička:</label>
           <input
              required
              id="head"
              type="text"
              placeholder='Hlavička'
              className='form-control'
              value={head}
              onChange={(e)=>setHead(e.target.value)}
           />
            <label htmlFor="article" className="form-label">Obsah článku:</label>
            <textarea
                required
                id="article"
                placeholder='Obsah článku'
                className='form-control'
                value={article}
                onChange={(e)=>setArticle(e.target.value)}
            />
             <label htmlFor="img" className="form-label">Obrazek:</label>
           <input
              id="img"
              type="url"
              placeholder='Zadej url obrazku'
              className='form-control'
              value={img}
              onChange={(e)=>setImg(e.target.value)}
           /> 
              <label htmlFor="video" className="form-label">Video:</label>
           <input
              id="video"
              type="url"
              placeholder='Zadej url videa'
              className='form-control'
              value={video}
              onChange={(e)=>setVideo(e.target.value)}
           />
           <button type='submit' className='btn btn-info m-2'> Uložit</button>
          </form>
    </main>
  )
}
