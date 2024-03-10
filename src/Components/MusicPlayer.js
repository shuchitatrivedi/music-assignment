import { useState,useEffect } from "react";
import { useUser } from "../Providers/UserProvider";
import axios from "axios";
export const MusicPlayer = (props)=>{
    const {title,thumbnail,songId,audio_url} = props;
    useEffect(()=>{
      setWatchList(false);
   },[props])
     
    const {getToken} = useUser();
    const [getWatchList,setWatchList] = useState(false);
    const onClickHandler = (songId) => {
        axios.patch('https://academics.newtonschool.co/api/v1/music/favorites/like', { songId: songId }, {
          headers: {
            projectID: 'f104bi07c490',
            Authorization:`Bearer ${getToken}`
          }
        }).then((result) => {
          console.log(result);
          setWatchList(true);
        }).catch((error) => {
          console.log(error);
        })
    
      }
    

        return (<>
        <section className="music-player">
            <img 
            alt=""
            src={thumbnail}
            height = {"50"}
            width={"50"}
            className="bannerImg"
            
            />
            <div className="music-title">{title}</div>
            
            <audio src={audio_url} controls />
            {getToken && !getWatchList && <i onClick={() => onClickHandler(songId)} class="fa-regular fa-heart"></i>}
      {getToken && getWatchList && <i style={{ color: 'white' }} class="fa-solid fa-heart"></i>}
        </section>
    
        </>)   
}