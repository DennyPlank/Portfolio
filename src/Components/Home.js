import React, { useState } from "react";
import NavBar from "./Navbar";
import Contact from "./Contact";
import About from "./About";
import HomePage from "./HomePage";

const Home = () =>{
    const [page, setPage] = useState(1)

    const getPageState = (choice) =>{
        setPage(choice)
    }

    const pageToRender = () => {
        if (page == 3){
            return (
                <Contact />
            )
        } else if (page == 2) {
            return (
                <About />
            )
        } else if (page == 1) {
            return (
                <HomePage />
            )
        }
    }

    return (
        <div>
            <nav class="navHomeContainer">
             <NavBar state={getPageState} />
            </nav>
            {pageToRender()}
        </div>
    )
}

export default Home;