import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SaveIcon from '@mui/icons-material/Save';
import FormLabel from '@mui/material/FormLabel';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';

function UserCommentEditForm({comment}) {
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState([])

    useEffect(() => {
        async function start(){
            let starterFormData = {
                "content": location.state.comment.comment.content
            }
        setFormData(starterFormData)
        }
    start()
    }, [])

    function goBack(e) {
      e.preventDefault();
      navigate(`/user/comments`);
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/comments/${location.state.comment.comment.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData)
        })
        .then((c) => {
          if (c.ok) {
            c.json().then((comment) => 
            {
              console.log(comment)
              navigate(`/user/comments`);
            })
          } else {
            c.json().then(json => setErrors(Object.entries(json.errors)))
          }
        });
    }

    function handleChange(e) {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    return(
        <Box align="center" >
          <Card sx={{ m: 1, width: 1, backgroundColor: "#3a5a40" }} elevation={10} component={Paper}>
            {errors?errors.map(e => <div key={e[0]}>{e[1]}</div>):null}
            <form onSubmit={handleSubmit}>
                <br />
                <FormLabel>
                    Edit comment here:
                </FormLabel>
                  <TextField sx={{ backgroundColor: "#dad7cd" }}
                      id="filled-multiline-flexible"
                      multiline
                      maxRows={4}
                      type="text"
                      name="content"
                      placeholder={formData.content}
                      value={formData.content}
                      onChange={handleChange}
                  />
                <br />
                <Button
                  variant="outlined" 
                  style={{backgroundColor:"#FFFFFF", color: "#3a5a40"}} 
                  sx={{ mb: 2 }} 
                  startIcon={
                    <SaveIcon sx={{ color: "#3a5a40" }} />
                  }
                >
                  Save edit
                </Button>
                <Button 
                  variant="outlined" 
                  style={{backgroundColor:"#FFFFFF", color: "#3a5a40"}} 
                  sx={{ mb: 2 }} 
                  startIcon={<KeyboardBackspaceIcon sx={{ color: "#3a5a40" }} />}
                  onClick={e=>goBack(e)}
                >
                    Back
                </Button>
            </form>
            </Card>
        </Box>
    )
}

export default UserCommentEditForm