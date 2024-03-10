import { useContext,createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children})=>{

    const [getName,setName] = useState(sessionStorage.getItem("name"));
    const [getToken,setToken] = useState(sessionStorage.getItem("token"));
    const onNameHandler =(data)=>{
        setName(data);
        sessionStorage.setItem("name",data)
    }
    const onTokenHandler = (data)=>{
        setToken(data);
        sessionStorage.setItem("token",data);
    }

    const object = {
        getName,
        getToken,
        onNameHandler,
        onTokenHandler


    }

    return(
        <div>
            <UserContext.Provider value={object}>
                {children}
            </UserContext.Provider>
        </div>
    )
}

export function useUser(){
    return useContext(UserContext)
}