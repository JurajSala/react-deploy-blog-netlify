
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Header';
import { Nav } from "./Nav";
import { Footer} from "./Footer";
import {Home} from "./Home";
import { PostPage } from "./PostPage";
import { NewPost} from "./NewPost.js";
import { EditPost } from './EditPost.js';
import { About } from "./About";
import { NewAbout } from './NewAbout.js';
import { Missing } from "./Missing";
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import api from './api/posts';
import { useWindowSize } from './hooks/useWindowSize.js';
import useAxiosFetch from './hooks/useAxiosFetch.js';


function App() {
  const [posts,setPosts] = useState([]);
  const [articles,setArticles] = useState([]);
  const [search,setSearch]=useState("");
  const [searchhResults, setSearchResults] = useState([]);
  const [postBody,setPostBody] = useState("");
  const [postTitle,setPostTitle] = useState("");
  const [editTitle,setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const {width} =useWindowSize();
  const {data, fetchError, isLoading}= useAxiosFetch("http://localhost:3050/posts");
 

  useEffect(() => {
    setPosts(data);
  }, [data])

  useEffect(()=>{
   const filterPosts=posts.filter( ( post )=> 
            (post.body.toLowerCase().includes(search.toLowerCase())
            ||
            post.title.toLowerCase().includes(search.toLowerCase())
            )
          );
    setSearchResults(filterPosts.reverse());

  },[posts,search])

  const handleSubmit = async (e) =>{
        e.preventDefault();
        let id = posts.length ? parseInt(posts[posts.length-1].id)+1 : 1;
        id = id.toString();
        const dateTime = format(new Date(), "MMMM dd , yyyy pp");
        const newPost = { id, title: postTitle, datetime: dateTime, body: postBody };
        try{
            const response= await api.post( "/posts", newPost);

            const newPosts = [...posts, response.data];
            setPosts(newPosts);
            setPostTitle("");
            setPostBody("");
        }catch(err){
          console.log(`Error>${err.message}`)
        }
  }
  
  const handleEdit = async (id) =>{
        const today = format(new Date(), "MMMM dd , yyyy pp")
        const updatePost = { id, title: editTitle, today,  body: editBody }
       
       try{
         const response = await api.put(`/posts/${id}`, updatePost);
         setPosts(posts.map( post => ( (post.id).toString() === id) ? {...response.data} : post));
       }catch(err){
         console.log(`error:${err.message}`);
       }

  }
  const  handleDelete = async (id) => {
         try {
          await api.delete(`/posts/${id}`);
          setPosts( posts.filter( post =>post.id !== id) );
          setEditBody("");
          setEditTitle("");
         }catch (err) {
            console.log(`error:${err.message}`);
         }
  }
  
  return (
    <div className="shadow d-flex flex-column align-item-end col col-lg-8 offset-lg-2 bg-light" style={{"minHeight": "100vh"}}>
      <Router>
      <Header title={"React JS Blog"}
              width={ width }
      />
      <Nav 
        search={search}
        setSearch={setSearch}
      />
        
          <Routes path="/">
            <Route index element={
                <Home 
                  posts={searchhResults}
                  fetchError={fetchError}
                  isLoading = {isLoading}
                />
            }/> 
            <Route  path="post" element={
                <NewPost 
                   componentTitle={"Nová pošta"}
                   title={postTitle}
                   setTitle={setPostTitle}
                   body={postBody}
                   setBody={setPostBody}
                   handleSubmit={handleSubmit}
                />
            }/> 
            <Route  path="edit/:id" element={
                <EditPost 
                   posts={posts}
                   editTitle={editTitle}
                   setEditTitle={setEditTitle}
                   editBody={editBody}
                   setEditBody={setEditBody}
                   handleEdit={handleEdit}
                />
            }/> 
            <Route path="post/:id" element={
                <PostPage posts={posts} handleDelete= { handleDelete }/>
            }/> 
            <Route path="about" element={
                <About 
                  articles={articles} 
                  setArticles={setArticles}
                />
            }/> 
            <Route path="about/new" element={
                <NewAbout 
                    articles={articles} 
                    setArticles={setArticles}
                />
            }/> 
            <Route path="*" element={
                <Missing/>
            }/> 

          </Routes>
        </Router>  
      <Footer/>
      
    </div>
  );
}

export default App;