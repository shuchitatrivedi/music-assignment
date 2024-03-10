import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../Providers/UserProvider";

export default function Sidebar(){
    const {getToken} = useUser();
    return(<>
    <ul class="list-group">
  <li class="list-group-item"><Link to="/">Home</Link></li>
  {getToken && <li class="list-group-item"><Link to ="/library">Library</Link></li>}
  
  
</ul>
    
    </>)
}