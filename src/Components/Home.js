import React, { useState } from "react";
import NavBar from "./Navbar";

const Home = () =>{
    const [count, setCount] = useState(0)

    return (
        <div>
            <NavBar/>
            <p>
                Hello! My name is Dennis Plank! I'm a full stack Web Developer and QA enginener 
                based out of Utah and the great Bay Area! I'm also a muscian, outdoorsman, and 
                aspiring cowboy. Feel free to look around and learn more about me! This site was 
                built with React.
            </p>
        </div>
    )
}

export default Home;