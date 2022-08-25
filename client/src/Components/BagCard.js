import * as React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import { Navigate, useNavigate } from "react-router-dom";
import CommentCard from "./CommentCard.js";


import { Button, Card, CardContent, CardHeader, CardMedia, Container, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
// import { CardActions, Collapse, FormControl, FormLabel, Grid, Input, Typography } from '@mui/material';
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';

function BagCard({ bag, user, handleUnbag, errors }) {
    const [showComments, setShowComments] = useState([])
    const { disc, id, comments, bag_user } = bag

    function handleComments() {
        setShowComments(!showComments)
    }

    return (
        <Container>
            <Card sx={{ m: 1, width: 1, backgroundColor: "#7d977d" }} elevation={10} component={Paper}>
                <CardHeader
                    style={{ color: "#dcdfe4", backgroundColor: "#7d977d" }}
                    title={disc.mold}
                    subheader={disc.brand}
                />
                <CardMedia
                    component="img"
                    height="350"
                    image={disc.image}
                    alt=" {mold} img"
                />
                <CardContent>
                    <TableContainer elevation={6} component={Paper}>
                        <Table style={{ color: "#2d433c", backgroundColor: "#eff0f2" }} size="small" aria-label="a dense table">
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center">Speed</TableCell>
                                    <TableCell align="center">{disc.speed}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">Glide</TableCell>
                                    <TableCell align="center">{disc.glide}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">Turn</TableCell>
                                    <TableCell align="center">{disc.turn}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">Fade</TableCell>
                                    <TableCell align="center">{disc.fade}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
                {bag_user ?
                    <p
                        style={{ color: "#000000", backgroundColor: "#7d977d" }}
                        align="center">
                        Added to the bag by
                        <br />
                        {bag_user.name}
                    </p>
                    : null
                }
                <Button
                    variant="outlined"
                    type="submit"
                    style={{ color: "#2d433c", backgroundColor: "#eff0f2" }}
                    startIcon={<NotesOutlinedIcon />}
                    onClick={handleComments}>
                    {showComments ? "Hide Comments" : "Show Comments"}
                </Button>
                <br />
                {showComments ?
                    <div
                        style={{ color: "#dcdfe4", backgroundColor: "#7d977d" }}
                        align="center">
                        {comments.length > 0 ?
                            <div>
                                {comments.map(comment => <CommentCard key={comment.id} comment={comment} />)}
                            </div> : <p>There are no comments for this disc yet.</p>
                        }
                    </div> : null}
                <Button
                    variant="outlined"
                    type="submit"
                    style={{ color: "#2d433c", backgroundColor: "#eff0f2" }}
                    startIcon={<BackpackOutlinedIcon />}
                    onClick={() => handleUnbag(id)}
                >
                    Take out of my bag
                </Button>
                <br />
                {user ?
                    <Button style={{ color: "#2d433c", backgroundColor: "	#eff0f2" }} startIcon={<RateReviewOutlinedIcon />}>
                        <Link to="/comments/new" state={{ disc: { disc }, user: { user } }}>
                            Add a Comment
                        </Link>
                    </Button>
                    : null
                }
            </Card>
        </Container>
    )
}

export default BagCard;