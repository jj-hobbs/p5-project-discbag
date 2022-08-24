import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Paper, CardHeader } from "@mui/material";
import Card from '@mui/material/Card';
import { Box } from "@mui/system";

function UserNav({user}) {

    return(
        <Box 
            sx={{ backgroundColor: "transparent"}} 
            justifyContent="space-evenly"
            alignItems="center"
            >
        
            <CardHeader 
                // style={{color:"#FFFFFF", backgroundColor: "#3a5a40"}}
                title="View Your" 
            />
            <NavLink to="/user/discs">
                <Button variant="outlined" sx={{ m:.5, width: .4, p:1, color: "white", backgroundColor: "#3a5a40" }} item xs={6}>
                    Created Discs
                </Button>
            </NavLink>
            <NavLink to="/user/bags">
                <Button variant="outlined" sx={{ m:.5, width: .4, p:1, color: "white", backgroundColor: "#3a5a40" }} item xs={6}>
                    Disc Bag
                </Button>
            </NavLink>
            <br />
            <NavLink to="/user/comments">
                <Button variant="outlined" sx={{ m:.5, width: .4, p:1, color: "white", backgroundColor: "#3a5a40" }} item xs={6}>
                    Comments
                </Button>
            </NavLink>
            <NavLink to="/user">
                <Button variant="outlined" sx={{ m:.5, width: .4, p:1, color: "white", backgroundColor: "#3a5a40" }} item xs={6}>
                    Info
                </Button>
            </NavLink>
        </Box>
    )
}

export default UserNav;