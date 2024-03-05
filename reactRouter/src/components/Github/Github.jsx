import React, { useEffect, useState } from "react";

function Github(){
    const [data,setData] = useState([])

    useEffect( ()=>{
        fetch(`https://api.github.com/users/rahul78700`)
        .then( (res)=> res.json() )
        .then( (data)=>{
            console.log(data)
            setData(data)
        } )
    },[] )
    return (
        <div className="bg-gray-700 text-center text-white p-4 text-3xl"> Github Follower :  {data.followers} 
        <img src= {data.avatar_url} alt="Github Image" width= "300" />


        </div>
    )
}

export default Github