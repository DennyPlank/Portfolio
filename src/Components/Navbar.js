import React from "react"

const NavBar = (props) => {
    
    const handleClick = (e) => {
        // console.log(typeof(props.state))
        // console.log(props.state)
        // console.log(e)
        return(props.state(e))
    }
    
    return (
        <div id="navbar">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" aria-current="page" value={1} onClick={(e) => handleClick(e.currentTarget.getAttribute('value'))} > Home</a>
                            <a class="nav-link" aria-current="page" value={2} onClick={(e) => handleClick(e.currentTarget.getAttribute('value'))} > About</a>
                            <a class="nav-link" aria-current="page" value={3} onClick={(e) => handleClick(e.currentTarget.getAttribute('value'))} > Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar