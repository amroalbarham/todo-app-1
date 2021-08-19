import React from 'react'
import { Button, Navbar } from "@blueprintjs/core";
import { Link } from 'react-dom';
function Header() {
    return (
        <Navbar>
            <Navbar.Group >
                <Navbar.Heading>Todo</Navbar.Heading>
                <Navbar.Divider />
                <a href="/"><Button className="bp3-minimal" icon="home" text="Home" /></a>
                <a href="/settings"><Button className="bp3-minimal" icon="cog" text="Settings" /></a>             </Navbar.Group>
        </Navbar>

    )
}

export default Header
