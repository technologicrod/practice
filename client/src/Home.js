import './App.css';
import React, { useState, useEffect } from "react";
import Axios from 'axios';

function Home(){
    const [name, setName] = useState("")
    useEffect(() =>{
        Axios.get('http://localhost:8000/').then((response) => {
            setName(response.data);
        })
    }, [])
    return (
        <div className="App">
            <h1>{name}</h1>
        </div>
    )
}
export default Home