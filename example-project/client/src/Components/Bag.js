import {useEffect, useState} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Disc from "./Disc.js"
import Comment from "./Comment.js";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
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

function Bag({ bag, user }) {
    const [showComments, setShowComments] = useState([])
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const { disc, id, comments, bag_user } = bag

    function handleUnbag() {
        console.log("click!")
        fetch(`/bags/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
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

    function handleComments(){
        setShowComments(!showComments)
    }

    return(
        <Card sx={{ maxWidth: 300 }} elevation={10} component={Paper}>
            <CardHeader
                title={disc.brand}
                subheader={disc.mold}
            />
            <CardMedia
                component="img"
                height="200"
                image={disc.image}
                alt=" {mold} img"
            />
            <CardContent>
                <TableContainer elevation={6} component={Paper}>
                    <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                        <TableCell align="center">Speed</TableCell>
                        <TableCell align="center">Glide</TableCell>
                        <TableCell align="center">Turn</TableCell>
                        <TableCell align="center">Fade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">{disc.speed}</TableCell>
                            <TableCell align="center">{disc.glide}</TableCell>
                            <TableCell align="center">{disc.turn}</TableCell>
                            <TableCell align="center">{disc.fade}</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                </TableContainer> 
            </CardContent>
            {bag_user? 
                <p align="center">
                    Added to the bag by 
                    <br />
                    {bag_user.name}
                </p>
             : null 
            }
             <Button onClick={handleComments}>
                {showComments? "Hide Comments" : "Show Comments" }
            </Button>
            <br />
            {showComments? 
                <div>
                    {comments.length>0?
                        <div>
                            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
                        </div> : <p>There are no comments for this disc yet.</p>
                    }
                </div> : null }
            <Button onClick={handleUnbag}>
                Take out of my bag
            </Button>
            <br />
            {user ? 
                <Button>
                    <Link to="/comments/new" state={{disc: {disc}, user: {user}}}>
                        Add a Comment
                    </Link>
                </Button> 
                : null
            }
            
            
        </Card>
    )
}

export default Bag;

{/* <Card sx={{ maxWidth: 300 }} elevation={10} component={Paper}>
        <CardHeader
          title={brand}
          subheader={mold}
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
              <TableHead>
                <TableRow>
                  <TableCell align="center">Speed</TableCell>
                  <TableCell align="center">Glide</TableCell>
                  <TableCell align="center">Turn</TableCell>
                  <TableCell align="center">Fade</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow>
                    <TableCell align="center">{speed}</TableCell>
                    <TableCell align="center">{glide}</TableCell>
                    <TableCell align="center">{turn}</TableCell>
                    <TableCell align="center">{fade}</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer> 
          <br /> <br />
      
          <CardActions disableSpacing>
          
            {user ? 
            <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}} onClick={handleBag} endIcon={<BackpackIcon/>}>
                Bag It!
            </Button>
            : null } 

            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              >
                <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
        </CardContent>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
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
                <div>
                    {comments.length>0?
                        <div>
                            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
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
    </Card> */}