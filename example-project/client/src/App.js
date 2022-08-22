import './App.css';
import Login from "./Components/Login.js";
import Header from "./Components/Header.js";
import NavBar from "./Components/NavBar.js";
import Signup from "./Components/Signup.js";
import Discs from "./Components/Discs.js";
import DiscsHome from './Components/DiscsHome';
import User from "./Components/User.js";
import UserNav from "./Components/UserNav.js";
import UserEditForm from "./Components/UserEditForm.js";
import UserComments from "./Components/UserComments.js"
import NewCommentForm from "./Components/NewCommentForm.js"
import UserCommentEditForm from "./Components/UserCommentEditForm"
import UserDiscs from "./Components/UserDiscs.js"
// import WriteDisc from "./Components/WriteDisc.js"
import UserDiscEditForm from './Components/UserDiscEditForm';
import UserBags from './Components/UserBags';
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, NavLink, BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});


function App() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate();

  function handleLogin(user) {
    setUser(user);
  }

  function doLogout() {
    navigate("/")
    setUser(null)
  }

  function deleteUser() {
    setUser(null)
    navigate("/")
  }

  function updateUser(updatedUser) {
    setUser(updatedUser)
  }

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((client) => {
          setUser(client);
        });
      } else {
        console.log("We're not rendering anyhting");
      }
    });
  }, []);

  return (
    <div>
       <ThemeProvider theme={theme}>
      
      
      <NavBar user={user} doLogout={doLogout} />
      {user? <UserNav user={user}/> : null }
      {/* <Header user={user} doLogout={doLogout} /> */}
      <Routes>
        <Route exact path="/" element={<DiscsHome user={user}/>}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login handleLogin={handleLogin} />}/>
        <Route path="/discs" element={<Discs user={user}/>}/>
        <Route path="/user" element={<User user={user} deleteUser={deleteUser}/>}/>
        <Route path="/user/edit" element={<UserEditForm user={user} updateUser={updateUser}/>}/>
        <Route path='/user/comments' element={<UserComments user={user}/>}/>
        <Route path='/user/comments/:id' element={<UserCommentEditForm/>}/>
        <Route path="/comments/new" element={<NewCommentForm/>}/>
        <Route path="/user/discs" element={<UserDiscs user={user}/>}/>
        {/* <Route path="/disc/new" element={<WriteDisc user={user}/>}/> */}
        <Route path="/disc/edit" element={<UserDiscEditForm user={user}/>}/>
        <Route path="/user/bags" element={<UserBags user={user} setUser={setUser}/>}/>
      </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
