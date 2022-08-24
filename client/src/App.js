import './App.css';
import LoginPage from "./Components/LoginPage.js";
// import Header from "./Components/Header.js";
import NavBar from "./Components/NavBar.js";
import SignupPage from "./Components/SignupPage.js";
import DiscsPage from "./Components/DiscsPage.js";
import DiscsHome from './Components/DiscsHome';
import User from "./Components/User.js";
import UserNav from "./Components/UserNav.js";
import UserEditForm from "./Components/UserEditForm.js";
import UserCommentsPage from "./Components/UserCommentsPage.js"
import NewCommentForm from "./Components/NewCommentForm.js"
import UserCommentEditForm from "./Components/UserCommentEditForm"
import CreatedDiscs from "./Components/UserCreatedDiscs.js"
import CreateDiscPage from "./Components/CreateDiscPage.js"
import UserDiscEditForm from './Components/UserDiscEditForm';
import UserBagsPage from './Components/UserBagsPage';
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, NavLink, BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
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
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/login" element={<LoginPage handleLogin={handleLogin} />}/>
        <Route path="/discs" element={<DiscsPage user={user}/>}/>
        <Route path="/user" element={<User user={user} deleteUser={deleteUser}/>}/>
        <Route path="/user/edit" element={<UserEditForm user={user} updateUser={updateUser}/>}/>
        <Route path='/user/comments' element={<UserCommentsPage user={user}/>}/>
        <Route path='/user/comments/:id' element={<UserCommentEditForm/>}/>
        <Route path="/comments/new" element={<NewCommentForm/>}/>
        <Route path="/user/discs" element={<CreatedDiscs user={user}/>}/>
        <Route path="/disc/new" element={<CreateDiscPage user={user}/>}/>
        <Route path="/disc/edit" element={<UserDiscEditForm user={user}/>}/>
        <Route path="/user/bags" element={<UserBagsPage user={user} setUser={setUser}/>}/>
      </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
