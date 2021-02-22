import React,{useState,useEffect} from 'react';
const Posts=(props)=>{
const [post,setPost]=useState([]);
const [title,setTitle]=useState('');
const [limit,setLimit]=useState(10);
const [userId,setUserId]=useState(undefined);
const [body,setBody]=useState('');


useEffect(()=>{

fetch(`https://jsonplaceholder.typicode.com/posts?${userId===undefined?null:"userId="+userId}&skip=0&limit="${limit}"`).then((res)=>{
    return res.json();
}).then((res)=>{
  setPost(state=>[...state,...res]);
  console.log(post )
})
},[userId])



const submitHandler=(event)=>{
    setPost([]);
    setUserId(event.target.value)
    setUserId(event.target.value)

    console.log(userId)
    fetch(`https://jsonplaceholder.typicode.com/posts?${userId===undefined?null:"userId="+userId}&skip=0&limit=${limit}`).then((res)=>{
      
    return res.json();
}).then((res)=>{
  setPost(state=>[...state,...res]);
 
})   
}

    return(
      <>
      <div>
          <input placeholder="Search By Title" onChange={(event)=>{setTitle(event.target.value)}} style={{margin:"10px"}}  />
          <input placeholder="user Id" onChange={submitHandler} style={{margin:"10px"}} value={userId} />
         <input placeholder="Search By Body" onChange={(event)=>{setBody(event.target.value)}} style={{margin:"10px"}}  />  
        </div>
            <div className="container ">
            <div className="row bg-primary p-2" >
            <div className="col">User Id</div>
            <div className="col">Title</div>
            <div className="col">Body</div>
            </div>
            </div>
          {
            post.filter(value=> { return  value.title.includes(title) &&  value.body.includes(body) || value.userId===userId }).map((output)=>{
             
              return(
                <>
                <div className="container" style={{boxShadow :"1px 1px 8px #888888"}}>
                <div className="row">
                <div className="col">{output.userId}</div>
                <div className="col">{output.title}</div>
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

export default Posts;