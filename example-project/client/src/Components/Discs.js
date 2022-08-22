import { useEffect, useState } from "react";
import Disc from "./Disc.js"
import Card from '@mui/material/Card';
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import GridList from "@mui/material/Grid";



function Discs({ user }) {
    const [discs, setDiscs] = useState([])

    useEffect(() => {
        fetch("/discs")
          .then((r) => r.json())
          .then((r) => {
            setDiscs(r);
          });
      }, []);

    return (
      <Grid container spacing={3} justifyContent="space-evenly" alignItems="center">
        {discs.map((disc) => (
          <Grid  justifyContent="space-evenly" alignItems="center" item xs={3}>
            <Disc key={disc.id} disc={disc} edit={false} user={user}/>
          </Grid>
        ))}
      </Grid>
        
    )

}

export default Discs;