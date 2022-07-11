import React from "react";  
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

function Navbar() {
    
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/resume' activeStyle>
                        Resume
                    </NavLink>
                    <NavLink to='/projects' activeStyle>
                        Current and Past projects
                    </NavLink> 
                    <NavLink to='/photos' activeStyle>
                        Photos
                    </NavLink>
                    <NavLink to='/blogs' activeStyle>
                        Blogs
                    </NavLink>
                    <NavLink to='/calendar' activeStyle>
                        Calendar
                    </NavLink>
                    <NavLink to='/signin' activeStyle>
                        SignIn
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='./signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar;