import React, { useState } from 'react'
import {useAuth0} from '@auth0/auth0-react'
import JSONPretty from 'react-json-pretty'
const Profile = () => {
    const {user,isAuthenticated}= useAuth0();
    if(isAuthenticated){
       localStorage.setItem('Login User',JSON.stringify({user}))
    }
    const[data,setData]=useState(JSON.parse( localStorage.getItem('Login User')))
    console.log(data,'data',isAuthenticated)
    return (
        <>
        {data && (<div>
            <img src={data?.user?.picture} alt=""/>
            <h2>{data?.user?.name}</h2>
            <p>{data?.user?.email}</p>
            <p>{data?.user.sub.split("|")[1]}</p>
            <JSONPretty data={user}/>
        </div>)}
        </>
    )
}

export default Profile
