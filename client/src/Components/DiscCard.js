import { useEffect, useState } from "react";
import Comment from "./CommentCard.js"
import { Link, useNavigate } from "react-router-dom";
// import { Card, Table, Button, Icon } from "semantic-ui-react";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Container, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
// import {  FormControl, FormLabel, Grid, Input } from '@mui/material';
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

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

function DiscCard({ disc, user, edit }) {
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

  function handleComments() {
    setShowComments(!showComments)
    if (comments) {
      setNoComments(!noComments)
    }
  }

  function handleDelete(e) {
    e.preventDefault();
    fetch(`/discs/${disc.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(d => {
        if (d.ok) {
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

  return (

    <Container>
      {errors ? errors.map(e => <div key={e[0]}>{e[1]}</div>) : null}
      <Card sx={{ m: 1, width: 1, backgroundColor: "#7d977d" }} elevation={10} component={Paper}>
        <CardHeader
          style={{ color: "#eff0f2", backgroundColor: "#7d977d" }}
          title={mold}
          subheader={brand}
        />
        <CardMedia
          component="img"
          height="350"
          image={image}
          alt=" {mold} img"
        />
        <CardContent>
          <TableContainer elevation={6} component={Paper}>
            <Table style={{color:"#2d433c", backgroundColor: "#eff0f2"}} size="small" aria-label="a dense table">
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
              <Button sx={{ width: .5 }} variant="outlined" type="submit" style={{ color: "#2d433c", backgroundColor: "	#eff0f2" }} onClick={handleBag} endIcon={<BackpackOutlinedIcon />}>
                Bag It!
              </Button>
              : null}

            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon style={{ color: "#2d433c", backgroundColor: "transparent" }} />
            </ExpandMore>
          </CardActions>
        </CardContent>

        <Collapse in={expanded} style={{ color: "#2d433c", backgroundColor: "#7d977d" }} timeout="auto" unmountOnExit>

          <CardContent>
            <Typography paragraph>
              {description}
            </Typography>
          </CardContent>
        </Collapse>
        <div>
          <Button
            sx={{
              m: 1,
              width: .6,
              p: 1
            }}
            variant="outlined"
            type="submit"
            style={{ color: "#2d433c", backgroundColor: "	#eff0f2" }}
            startIcon={<NotesOutlinedIcon />}
            onClick={handleComments}
          >
            {showComments ? "Hide Comments" : "Show Comments"}
          </Button>
          <br />
          {showComments ?
            <div style={{ color: "#2d433c", backgroundColor: "	#7d977d" }}>
              {comments.length > 0 ?
                <div>
                  {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
                </div> : <p>There are no comments for this disc yet.</p>
              }
            </div>
            : null
          }

          {user ?
            <Button
              variant="outlined"
              type="submit" 
              style={{ 
                color: "#2d433c", 
                backgroundColor: "#eff0f2" 
              }} 
              startIcon={<RateReviewOutlinedIcon />}
            >
              <Link 
                to="/comments/new" 
                state={{ disc: { disc }, user: { user } }}
              >
                Add a Comment
              </Link>
            </Button> 
            : null
          }
        </div>
        <br />

        {edit ?
          <>
            <Button 
              sx={{ 
                m: 1, 
                width: .4, 
                p: 1 
              }} 
              variant="outlined" 
              type="submit" 
              style={{ 
                color: "#2d433c", 
                backgroundColor: "#eff0f2" 
              }}
              startIcon={<RateReviewOutlinedIcon />}
            >
              <Link 
                to="/disc/edit" 
                state={{ disc: { disc } }}
              >
                Edit Disc
              </Link>
            </Button>
            <Button 
              sx={{ 
                m: 1, 
                width: .45, 
                p: 1 
              }} 
              variant="outlined" 
              type="submit" 
              style={{ 
                color: "#2d433c", 
                backgroundColor: "#eff0f2" 
              }}
              startIcon={<DeleteForeverOutlinedIcon />} 
              onClick={handleDelete}
            >
              Delete Disc
            </Button>
          </>
          : null}
      </Card>
    </Container>
  )
}

export default DiscCard;