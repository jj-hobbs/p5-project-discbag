import { useEffect, useState } from "react";
import DiscCard from "./DiscCard.js"
import SearchBar from "./SearchBar.js";
import FilterBar from "./FilterBar.js";
// import Card from '@mui/material/Card';
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import { Box } from "@mui/system";
// import GridList from "@mui/material/Grid";



function DiscsPage({ user }) {
    const [discs, setDiscs] = useState([])
    const [search, setSearch] = useState("")
    // Our States
  const [value, setValue] = useState([1,15]);
  
  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };

    function handleSearch(e) {
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    // const updatedDiscDisplay = discs.filter(disc => disc.mold.toLowerCase().includes(search.toLowerCase()) || disc.brand.toLowerCase().includes(search.toLowerCase()))
    const filteredDisc = discs.filter(disc => 
      (disc.mold.toLowerCase().includes(search.toLowerCase()) || 
          disc.brand.toLowerCase().includes(search.toLowerCase())
      ) && 
      (disc.speed >= value[0] && disc.speed <= value[1])
    )


    useEffect(() => {
        fetch("/discs")
          .then((r) => r.json())
          .then((r) => {
            setDiscs(r);
          });
      }, []);

    return (
      <div>
        <Box sx={{ backgroundColor: "transparent" }} >
          <br />
          <SearchBar handleSearch={handleSearch} />
          <br />
          <FilterBar value={value} rangeSelector={rangeSelector}  />
          <br />
        </Box>
        <Grid container spacing={2} justifyContent="space-evenly" alignItems="center">
          {filteredDisc.map((disc) => (
            <Grid  justifyContent="space-evenly" alignItems="center" item xs={4}>
              <DiscCard key={disc.id} disc={disc} edit={false} user={user}/>
            </Grid>
          ))}
        </Grid>
      </div>
    )

}

export default DiscsPage;