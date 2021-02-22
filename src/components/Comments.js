import React,{useState,useEffect} from 'react';
const Comments=(props)=>{
const [postId,setPostId]=useState(props.postId);
const [post,setPost]=useState([]);
useEffect(()=>{

fetch(`https://jsonplaceholder.typicode.com/comments?${postId===undefined?null:"postId="+postId}`).then((res)=>{
    return res.json();
}).then((res)=>{
  setPost(state=>[...state,...res]);
})
},[postId])



const submitHandler=(event)=>{
    setPost([]);
    setPostId(event.target.value)
    setPostId(event.target.value)
    fetch(`https://jsonplaceholder.typicode.com/comments?${postId===undefined?null:"postId="+postId}`).then((res)=>{
      
    return res.json();
}).then((res)=>{
  setPost(state=>[...state,...res]);
 
})   
}

    return(
      <>
      {
          post.map((output)=>{
             
            return(
              <>
              <div className="container" style={{boxShadow :"1px 1px 8px #999999"}}>
              <div className="row">
              <div className="col">{output.body}</div>
              </div>
              </div>
              </>
            )
        })
      }
      </>
    )
}

export default Comments;