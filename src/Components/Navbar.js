import React from "react"

const NavBar = () => {
    const handleClick = () => {
        console.log('clicked')
    }

    return (
        <div id="navbar">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid" onClick={handleClick}>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="/home">Home</a>
                    <a class="nav-link" href="#">About</a>
                    <a class="nav-link" href="/contact">Contact</a>
                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar