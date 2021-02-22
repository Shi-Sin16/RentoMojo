import React,{useState,useEffect} from 'react';
import Comments from './Comments';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const PostDetails=(props)=>{
const [post,setPost]=useState([]);
const [title,setTitle]=useState('');
const [userId,setUserId]=useState(props.userId);
const [body,setBody]=useState('');


useEffect(()=>{

fetch(`https://jsonplaceholder.typicode.com/posts?${userId===undefined?null:"userId="+userId}`).then((res)=>{
    return res.json();
}).then((res)=>{
  setPost(state=>[...state,...res]);
})
},[userId])



const submitHandler=(event)=>{
    setPost([]);
    setUserId(event.target.value)
    setUserId(event.target.value)
    fetch(`https://jsonplaceholder.typicode.com/posts?${userId===undefined?null:"userId="+userId}`).then((res)=>{
      
    return res.json();
}).then((res)=>{
  setPost(state=>[...state,...res]);
 
})   
}

    return(
      <>
      <div>
          <input placeholder="Search By Title" onChange={(event)=>{setTitle(event.target.value)}} style={{margin:"10px"}}  />
         <input placeholder="Search By Body" onChange={(event)=>{setBody(event.target.value)}} style={{margin:"10px"}}  />  
        </div>
            <div className="container ">
            <div className="row bg-primary p-2" >
            {/* <div className="col">User Id</div> */}
            <div className="col">Title</div>
            <div className="col">Body</div>
            <div className="col">Comments</div>
            </div>
            </div>
          {
            post.filter(value=> { return  value.title.includes(title) &&  value.body.includes(body) }).map((output)=>{
             
              return(
                <>
                <div className="container" style={{boxShadow :"1px 1px 8px #999999"}}>
                <div className="row">
                <div className="col">{output.title}</div>
                <div className="col">{output.body}</div>
                <div className="col">
                <BrowserRouter>
                  <Link to='/comments'>Comments</Link>
                  <Switch>
                    <Route path='/comments'>
                      <Comments />
                    </Route>
                  </Switch>
                  </BrowserRouter>
                </div>
                </div>
                </div>
                </>
              )
          })
      }
        </>
    )
}

export default PostDetails;