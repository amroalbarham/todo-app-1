import React from 'react'
import { Button, Navbar } from "@blueprintjs/core";
import { Link } from 'react-dom';
import Login from '../login/login';
import SignUp from '../signup/signup';
function Header() {
    return (
        <Navbar className="bp3-navbar bp3-dark">
            <Navbar.Group >
                <Navbar.Heading>Todo</Navbar.Heading>
                <Navbar.Divider />
                <a href="/"><Button className="bp3-minimal" icon="home" text="Home" /></a>
                <a href="/settings"><Button className="bp3-minimal" icon="cog" text="Settings" /></a>
                <Login  />
                <SignUp />
            </Navbar.Group>
        </Navbar>

    )
}

export default Header