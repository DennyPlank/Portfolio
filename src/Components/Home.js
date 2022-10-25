import React, { useState } from "react";
import NavBar from "./Navbar";
import Contact from "./Contact";
import About from "./About";

const Home = () =>{
    const [page, setPage] = useState(1)
    console.log(`the current page is ${page}`)

    // const testThis = () => {
    //     return "test complete"
    // }

    const getPageState = (choice) =>{
        setPage(choice)
    }

    const pageToRender = () => {
        if (page == 1){
            return (
                <Home />
            )
        } else if (page == 2){
            return (
                <Contact />
            )
        } else if (page == 3) {
            return (
                <About />
            )
        }
    }

    return (
        <div>
            <NavBar state={getPageState} />
            {/* {pageToRender()} */}
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