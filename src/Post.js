import React from 'react'
import { Link } from 'react-router-dom'

export const Post = ({post})=> {
  return (
    <article className='container-fluid p-3 col-8 offset-2 h-100'>
        <Link to= {`/post/${post.id}`} >
            <h2 className='text-center'>{post.title}</h2>
            <p className='text-center'>{post.datetime}</p>
        </Link>
        <p className='shadow text-start p-3'>
            { post.body.length < 25 ? (
                post.body
            ):(
                `${post.body.slice(0,25)}...`
            )}
        </p>
        <Link className='btn btn-warning' to={`/edit/${post.id}`}>Editovat</Link>
        <hr/>
    </article>
  )
}
