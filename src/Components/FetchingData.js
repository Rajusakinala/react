import React, {useState, useEffect } from 'react'

function FetchingData() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(responce=>responce.json()).then(data=>setData(data))
    },[])
  return (
    <ul>{data.map(person=><li key={person.id}>{person.username}</li>)}</ul>
  )
}

export default FetchingData