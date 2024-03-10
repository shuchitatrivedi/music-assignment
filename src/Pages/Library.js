import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import { useUser } from "../Providers/UserProvider";
import axios from "axios";
export default function Library(){
     

    const {getToken} = useUser();
    const [getList,setList] = useState([]);
    
    const onDeleteHandler =  (songId)=>{
    axios.patch("https://academics.newtonschool.co/api/v1/music/favorites/like",{songId: songId},{
            headers: {
                projectID: 'f104bi07c490',
                Authorization: `Bearer ${getToken}`
            }
        }).then((result)=>{
           listOfLibrary();
        }).catch((error)=>{
            console.log(error);
        })
    
    }


    const listOfLibrary =  ()=>{
         axios.get("https://academics.newtonschool.co/api/v1/music/favorites/like",{
            headers: {
                projectID: 'f104bi07c490',
                Authorization: `Bearer ${getToken}`
            }
        }).then((result)=>{
            console.log(result.data.data.songs);
            setList(result.data.data.songs);
        }).catch((error)=>{
            console.log(error);
        })
    }
        useEffect(()=>{
            listOfLibrary();
        },[]);


    return(
        <>
        <div className="global-container">
            <div className="left-sidebar">
                <Sidebar />
            </div>
            <div className="right-sidebar">
            <div className="music-container">
                {getList.map((obj,index)=>{
                    return(
                        <div key={index} className="music-card">
                            <img 
                            alt=""
                            src={obj.thumbnail}
                            height = {"150"}
                            width={"150"}
                            className="bannerImg"/>
                            <div className="title">{obj.title}<i onClick={()=>onDeleteHandler(obj._id)} class="fa-solid fa-trash-can"></i></div>
                        </div>
                    )
                })}
                    </div>
               
                

            </div>
        </div>



        
        </>
    )
            }
