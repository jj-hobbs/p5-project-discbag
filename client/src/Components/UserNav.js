import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

function UserNav({user}) {

    return(
        <nav>
            <NavLink to="/user/discs">
                <Button variant="outlined" sx={{ p:1, backgroundColor: "white" }}>
                    {user.name}'s Discs
                </Button>
            </NavLink>
            <NavLink to="/user/bags">
                <Button variant="outlined" sx={{ backgroundColor: "white" }}>
                    {user.name}'s Bag
                </Button>
            </NavLink>
            <NavLink to="/user/comments">
                <Button variant="outlined" sx={{ backgroundColor: "white" }}>
                    {user.name}'s Comments
                </Button>
            </NavLink>
            <NavLink to="/user">
                <Button variant="outlined" sx={{ backgroundColor: "white" }}>
                    {user.name}'s Info
                </Button>
            </NavLink>
        </nav>
    )
}

export default UserNav;