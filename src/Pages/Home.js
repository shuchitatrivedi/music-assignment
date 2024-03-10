import React from "react";
import Sidebar from "../Components/Sidebar";

import MusicCard from "../Components/MusicCard";
import { useState,useEffect } from "react";
import axios from "axios";
import { MusicPlayer } from "../Components/MusicPlayer";

export default function Home(){
    const [getData,setData] = useState([]);
    const [getMusic,setMusic] = useState(null)
    useEffect(()=>{
        musicList();
    },[])
 const  onMusicHandler  =(index)=>{
    let list = getData[index];
    setMusic(list);
 }
    
    const  musicList = async()=>{
      try{
        const response = await axios.get("https://academics.newtonschool.co/api/v1/music/song",{
            headers:{
                projectID:"yjeyh3nror9g"
            }
        })
        console.log(response.data.data);
        setData(response.data.data);
      }catch(err){
        console.log(err);
      }  
    }   
    return(
        <>
        <div className="global-container">
            <div className="left-sidebar">
                <Sidebar />
            </div>
            <div className="right-sidebar">
            <div className="music-container">
                {
                    
                    getData.map((obj,index)=>{
                        return(
                            <MusicCard 
                            key = {index}
                            thumbnail = {obj.thumbnail}
                            title = {obj.title}
                            artist = {obj.artist}
                            id= {index}
                            onMusicHandler = {onMusicHandler}
                            />
                        )
                    })
                }
                    </div>
               
                

            </div>
        </div>
{getMusic && (<MusicPlayer
    title={getMusic.title}
    thumbnail ={getMusic.thumbnail}
    audio_url = {getMusic.audio_url}
    songId = {getMusic._id}

    />)}
        </>
    )
}