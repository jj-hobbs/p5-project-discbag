import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
// import MenuIcon from "@mui/icons-material/Menu";
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
          <Card sx={{ m: 1, width: .5, backgroundColor: "#7d977d" }} elevation={10} component={Paper}>
            {errors?errors.map(e => <div key={e[0]}>{e[1]}</div>):null}
            <form onSubmit={handleSubmit}>
                <br />
                <FormLabel align="center">
                    Edit comment here:
                </FormLabel>
                  <TextField 
                      sx={{ backgroundColor: "#eff0f2" }}
                      id="filled-multiline-flexible"
                      multiline
                      maxRows={4}
                      type="text"
                      name="content"
                      placeholder={formData.content}
                      value={formData.content}
                      onChange={handleChange}
                  />
                <br /> <br />
                <Button
                  variant="outlined" 
                  style={{backgroundColor:"#2d433c", color: "#eff0f2"}} 
                  sx={{ m:1, width: .45, p:1 }} 
                  startIcon={
                    <SaveIcon sx={{ color: "#eff0f2" }} />
                  }
                >
                  Save edit
                </Button>
                <Button 
                  variant="outlined" 
                  style={{backgroundColor:"#2d433c", color: "#eff0f2"}} 
                  sx={{ m:1, width: .45, p:1 }} 
                  startIcon={<KeyboardBackspaceIcon sx={{ color: "#eff0f2" }} />}
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