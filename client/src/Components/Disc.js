import {useEffect, useState} from "react";
import Comment from "./Comment.js"
import { Link, useNavigate } from "react-router-dom";
// import { Card, Table, Button, Icon } from "semantic-ui-react";

import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import BackpackIcon from '@mui/icons-material/Backpack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import Container from '@mui/material/Container';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(90deg)' : 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Disc({ disc, user, edit }) {
    const [showComments, setShowComments] = useState(false)
    const [noComments, setNoComments] = useState(true)
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({})
    const { brand, mold, image, speed, glide, turn, fade, description, comments } = disc
    const navigate = useNavigate()
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        let starterFormData = {
            like: false,
            bag_user_id: null,
            bag_disc_id: null
        }
        setFormData(starterFormData)
    }, [])

    function newBag() {
        let toSend = formData
        toSend.like = !toSend.like
        toSend.bag_user_id = user.id
        toSend.bag_disc_id = disc.id
        return toSend
    }

    function handleComments(){
        setShowComments(!showComments)
        if (comments) {
            setNoComments(!noComments)
        }
    }

    function handleDelete(e){
        e.preventDefault();
        fetch(`/discs/${disc.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
        .then(d => {
            if(d.ok) {
                navigate(`/user`)
            } else {
                d.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
    }

    function handleBag(e) {
        e.preventDefault();
        fetch(`/bags`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBag())
        })

    }

    return(
        
        <Container>
            {errors?errors.map(e => <div key={e[0]}>{e[1]}</div>):null}
        <Card sx={{ m: 1, maxWidth: 300, backgroundColor: "#3a5a40" }} elevation={10} component={Paper}>
        <CardHeader 
          style={{color:"#FFFFFF", backgroundColor: "#3a5a40"}}
          title={mold}
          subheader={brand} 
        />
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt=" {mold} img"
        />
        <CardContent>
          <TableContainer elevation={6} component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableBody>
                  <TableRow>
                    <TableCell align="center">Speed</TableCell>
                    <TableCell align="center">{speed}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">Glide</TableCell>
                    <TableCell align="center">{glide}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">Turn</TableCell>
                    <TableCell align="center">{turn}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">Fade</TableCell>
                    <TableCell align="center">{fade}</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer> 
          <br /> <br />
      
          <CardActions disableSpacing>
          
            {user ? 
            <Button variant="outlined" type="submit" style={{color:"#3a5a40", backgroundColor: "	#FFFFFF"}} onClick={handleBag} endIcon={<BackpackIcon/>}>
                Bag It!
            </Button>
            : null } 

            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              >
                <ExpandMoreIcon style={{color:"#FFFFFF", backgroundColor: "#3a5a40"}} />
            </ExpandMore>
          </CardActions>
        </CardContent>
      
      <Collapse in={expanded} style={{color:"#FFFFFF", backgroundColor: "#3a5a40"}} timeout="auto" unmountOnExit>
        
        <CardContent>
          <Typography paragraph>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
        <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}} onClick={handleComments}>
            {showComments? "Hide Comments" : "Show Comments" }
        </Button>
        <br /> <br />
      {showComments? 
                <div  style={{color:"#FFFFFF", backgroundColor: "#3a5a40"}}>
                    {comments.length>0?
                        <div>
                            {comments.map(comment => <Comment key={comment.id} comment={comment}  />)}
                        </div> : <p>There are no comments for this disc yet.</p>
                    }
                </div> : null }
            {user ? <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}}><Link to="/comments/new" state={{disc: {disc}, user: {user}}}>Add a Comment</Link></Button> : null}
            <br />
            
            {edit?
            <>
            <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}}><Link to="/disc/edit" state={{disc:{disc}}}>Edit Disc</Link></Button> 
            <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}} onClick={handleDelete}>Delete Disc</Button>
            </> 
            : null}
    </Card>
    </Container>
    )
}

export default Disc;