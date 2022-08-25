import React from "react";
import { NavLink } from "react-router-dom";
import { Button, CardHeader, Box } from "@mui/material";

function UserNav({ user }) {

    return (
        <Box
            sx={{ mx: 30, backgroundColor: "transparent" }}
            justifyContent="space-evenly"
            alignItems="center"
        >

            <CardHeader
                // style={{color:"#dcdfe4", backgroundColor: "#2d433c"}}
                title="View Your"
            />
            <NavLink to="/user/discs">
                <Button variant="outlined" sx={{ m: .5, width: .2, p: 1, color: "#eff0f2", backgroundColor: "#2d433c", "&:hover": { backgroundColor: "bfc0bd", color: "#2d433c" } }} item xs={6}>
                    Created Discs
                </Button>
            </NavLink>
            <NavLink to="/user/bags">
                <Button variant="outlined" sx={{ m: .5, width: .2, p: 1, color: "#eff0f2", backgroundColor: "#2d433c", "&:hover": { backgroundColor: "bfc0bd", color: "#2d433c" } }} item xs={6}>
                    Disc Bag
                </Button>
            </NavLink>
            <br />
            <NavLink to="/user/comments">
                <Button variant="outlined" sx={{ m: .5, width: .2, p: 1, color: "#eff0f2", backgroundColor: "#2d433c", "&:hover": { backgroundColor: "bfc0bd", color: "#2d433c" } }} item xs={6}>
                    Comments
                </Button>
            </NavLink>
            <NavLink to="/user">
                <Button variant="outlined" sx={{ m: .5, width: .2, p: 1, color: "#eff0f2", backgroundColor: "#2d433c", "&:hover": { backgroundColor: "bfc0bd", color: "#2d433c" } }} item xs={6}>
                    Info
                </Button>
            </NavLink>
        </Box>
    )
}

export default UserNav;