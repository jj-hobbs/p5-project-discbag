import { useEffect, useState } from "react";
import Disc from "./Disc.js"
import SearchBar from "./SearchBar.js";
import Card from '@mui/material/Card';
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import GridList from "@mui/material/Grid";



function Discs({ user }) {
    const [discs, setDiscs] = useState([])
    const [search, setSearch] = useState("")

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    const updatedDiscDisplay = discs.filter(disc => disc.mold.toLowerCase().includes(search.toLowerCase()) || disc.brand.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        fetch("/discs")
          .then((r) => r.json())
          .then((r) => {
            setDiscs(r);
          });
      }, []);

    return (
      <div>
        <SearchBar handleSearch={handleSearch} />
      <Grid container spacing={2} justifyContent="space-evenly" alignItems="center">
        {updatedDiscDisplay.map((disc) => (
          <Grid  justifyContent="space-evenly" alignItems="center" item xs={4}>
            <Disc key={disc.id} disc={disc} edit={false} user={user}/>
          </Grid>
        ))}
      </Grid>
        </div>
    )

}

export default Discs;