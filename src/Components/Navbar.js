import React from "react"

const NavBar = (props) => {
    
    const handleClick = (e) => {
        return(props.state(e))
    }
    
    return (
        <div class="navWrapper">
            <div class="navbarItems">
                <a class="nav-link" aria-current="page" value={1} onClick={(e) => handleClick(e.currentTarget.getAttribute('value'))} > Home</a>
                <a class="nav-link" aria-current="page" value={2} onClick={(e) => handleClick(e.currentTarget.getAttribute('value'))} > About</a>
                <a class="nav-link" aria-current="page" value={3} onClick={(e) => handleClick(e.currentTarget.getAttribute('value'))} > Contact</a>
            </div>
        </div>
    )
}

export default NavBar