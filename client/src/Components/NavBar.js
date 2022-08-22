import React, { useState } from "react";
// import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { NavLink, Link } from "react-router-dom";


//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import FolderIcon from "@mui/icons-material/Folder";
import HomeIcon from '@mui/icons-material/Home';
import CircleIcon from '@mui/icons-material/Circle';
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

// const StyledSearch = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.primary.main, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.primary.main, 0.25)
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto"
//   }
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center"
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch"
//     }
//   }
// }));

// //search as JSX
// const search = (
//   <StyledSearch>
//     <SearchIconWrapper>
//       <SearchIcon />
//     </SearchIconWrapper>
//     <StyledInputBase
//       placeholder="Suchen…"
//       inputProps={{ "aria-label": "search" }}
//     />
//   </StyledSearch>
// );

function NavBar({ user, doLogout }) {
  //react useState hook to save the current open/close state of the drawer, normally variables dissapear afte the function was executed
  const [open, setState] = useState(false);

  //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => doLogout());
}

  return (
    <AppBar position="static" sx={{backgroundColor: "rgb(46, 69, 84)"}}>
      
        <Toolbar >
          <Container >
          <Typography variant="h3" sx={{ m: 2,flexGrow: 1, fontWeight: 900 }}>
            My Disc Bag
          </Typography>
          </Container>
          <Box component="div" sx={{}}>
          </Box>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* The outside of the drawer */}
          <Drawer
            //from which side the drawer slides in
            anchor="right"
            //if open is true --> drawer is shown
            open={open}
            //function that is called when the drawer should close
            onClose={toggleDrawer(false)}
            //function that is called when the drawer should open
            onOpen={toggleDrawer(true)}
          >
            {/* The inside of the drawer */}
            <Box
              sx={{
                p: 8,
                height: 1,
                backgroundColor: "rgb(46, 69, 84)"
              }}
            >
              {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
              <IconButton sx={{ mb: 2 }}>
                <CloseIcon onClick={toggleDrawer(false)} style={{color:"#FFFFFF", backgroundColor: "rgb(46, 69, 84)"}} />
              </IconButton>

              {/* <Divider sx={{ mb: 2 }} /> */}
              <br />
              <br />
              <br />

              <Box sx={{ mb: 2 }}>

                <NavLink end to="/">
                  <Button 
                    variant="outlined" 
                    style={{backgroundColor:"#FFFFFF", color: "rgb(46, 69, 84)"}} 
                    sx={{ mb: 2 }} 
                    startIcon={<HomeIcon sx={{ color: "rgb(46, 69, 84)" }} />}
                    >
                    HOME
                  </Button>
                </NavLink>

                <br />

                <NavLink end to="/discs">
                  <Button 
                    variant="outlined" 
                    style={{backgroundColor:"#FFFFFF", color: "rgb(46, 69, 84)"}} 
                    sx={{ mb: 2 }} 
                    startIcon={<CircleIcon sx={{ color: "rgb(46, 69, 84)" }} />}
                    >
                    DISCS
                  </Button>
                </NavLink>

                <br />
                  <>
                    {user ? null: 
                      <Link to="signup">
                        <Button 
                          variant="outlined" 
                          style={{backgroundColor:"#FFFFFF", color: "rgb(46, 69, 84)"}} 
                          sx={{ mb: 2 }}
                          >
                          Register
                        </Button>
                      </Link>
                    }
                    <br />
                    {user ? (
                        <Button 
                          variant="outlined" 
                          style={{backgroundColor:"#FFFFFF", color: "rgb(46, 69, 84)"}} 
                          sx={{ mb: 2 }}  
                          onClick={handleLogout}
                          >
                          Logout
                        </Button>
                      ) : (
                        <Link to="/login">
                            <Button 
                              variant="outlined" 
                              style={{backgroundColor:"#FFFFFF", color: "rgb(46, 69, 84)"}} 
                              sx={{ mb: 2 }}
                              >
                              Login
                            </Button>
                        </Link>
                      )
                    }
                  </>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      {/* </Container> */}
    </AppBar>
  );
}

export default NavBar