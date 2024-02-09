import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{
    let [status, setStatus] = useState(true);
    useEffect(()=>{
        window.addEventListener('online',()=>{
            setStatus(true);
        });
        window.addEventListener('offline',()=>{
            setStatus(false);
        })
    },[]);
    return status;
};

export default useOnlineStatus;