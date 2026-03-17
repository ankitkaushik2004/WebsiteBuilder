import React from 'react'
import { useEffect } from 'react'
import { serverUrl } from '../App'
import axios from "axios"


const usegetCurrentUser = () => {
   useEffect(()=>{
    const getCurrentUser=async ()=>{
        try {
           const result =await axios.get(`${serverUrl}/api/user/me`,
                {WithCredentials: true  })
                console.log(result);
                
            
        } catch (error) {
            console.log(error);
            
            
        }

    }
    getCurrentUser()
   },[])
}

export default usegetCurrentUser
