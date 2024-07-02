import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NewPost } from './NewPost';

export const EditPost = ({posts, editTitle, setEditTitle, editBody, setEditBody, handleEdit }) => {
    const {id} = useParams();
    const handleSubmit = (e) =>{
        e.preventDefault();
        handleEdit(id);
    }
    useEffect(()=>{
         const result= posts.find( post=> ((post.id).toString() === id));
         if(result){
            setEditTitle(result.title);
            setEditBody(result.body);
         }

        }, [id, posts,setEditBody,setEditTitle])
  return (
    <NewPost
        componentTitle={"Uprav poštu"}
        title={editTitle}
        setTitle={setEditTitle}
        body={editBody}
        setBody={setEditBody}
        handleSubmit={handleSubmit}
    />
  )
}

