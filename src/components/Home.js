import React,{Component,useState,useEffect} from 'react';
import Posts from './Posts';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";



const Home=()=>{
const [userInfo,setUserInfo]=useState([]);
const [company,setCompany]=useState('');
const [name,setName]=useState('');
const [userId,setUserId]=useState('');
useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
    return res.json();
}).then((res)=>{
  setUserInfo(state=>[...state,...res]);
  console.log(userInfo )
})
},[])
    return(
        <>
        <div>
        <input placeholder="Search By Name" onChange={(event)=>{setName(event.target.value)}} style={{margin:"10px"}}  />
        <input placeholder="Search By Company" onChange={(event)=>{setCompany(event.target.value)}}/>

       


        </div>
            <div className="container ">
            <div className="row bg-primary p-2">
            <div className="col">Name</div>
            <div className="col">company</div>
            <div className="col">Blog Site</div>
            </div>
            </div>
      {
          userInfo.filter(temp => temp.name.includes(name) && temp.company.name.includes(company)).map((output)=>{
              return(
                  <>
                <div className="container" style={{boxShadow :"10px 10px 8px #999999"}}>
                    <div className="row bg-light" >
                    <div className="col">{output.name}</div>
                    <div className="col">{output.company.name}</div>
                    {/* <div className="col">{output.website}</div> */}
                    <div className="col">
                        <BrowserRouter>
                        <Link to='/{output.website}'>{output.website}</Link>

                        <Switch>
                            <Route path='/{output.website}'>
                                <Posts />
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

export default Home;