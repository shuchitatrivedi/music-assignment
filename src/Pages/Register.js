import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Register(){
    const navigate = useNavigate();
  const [getData,setData] =useState({
    name:"",
    email:"",
    password:"",
    appType:"music"
  });
  const [getError,setError] = useState(null);
  const onChangeHandler =(event)=>{
    setData({...getData,[event.target.name]:event.target.value})
    
  }
  const onSubmitHandler = (event)=>{
    event.preventDefault();
    setError(null)
    if(!getData.name){
        setError("userName is mandatory");
        return;
    }else if(!getData.email){
        setError("Email is mandatory");
        return;
    }else if(!getData.password){
        setError("Please enter the password");
        return;
    }
    console.log(getData);
    axios.post("https://academics.newtonschool.co/api/v1/user/signup",getData,{
        headers:{
            projectID:"yjeyh3nror9g"
        }
    }).then((result)=>{
        console.log(result);
        navigate("/Login");
    }).catch((error)=>{
        setError(error.message?error.message:"Please try again later");
    })
  }
 
  
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-4">

                </div>
            <div className="col-4">
                {getError && <div class="alert alert-primary" role="alert">
  {getError}
</div>}
            <form onSubmit={onSubmitHandler}>
  <div class="form-group ">
    <label htmlFor="name">User Name</label>
    <input type="text" class="form-control" value={getData.name} name="name" autoComplete="off" onChange={onChangeHandler}/>
    
  </div>
  <div class="form-group ">
    <label htmlFor="email">Email address</label>
    <input type="email" class="form-control" value={getData.email} name="email" autoComplete="off" onChange={onChangeHandler} />
    
  </div>
  <div class="form-group ">
    <label htmlFor="password">Password</label>
    <input type="password" class="form-control" value={getData.password} name="password" autoComplete="off" onChange={onChangeHandler} />
  </div>
  <div class="form-group ">
      <label htmlFor="appType">App type</label>
      <select name="appType" value={getData.appType} class="form-control"  onChange={onChangeHandler}>
        <option >music</option>
        <option>Album</option>
      </select>
    </div>
 
  <button type="submit" class="btn btn-primary">Register</button>
</form>
            </div>
            <div className="col-4">
                    
                </div>
            </div>
        </div>
        </>
    )
}