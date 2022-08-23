import React from "react";
import { Input } from "@mui/material";
import Typography from '@mui/material/Typography';

function SearchBar({handleSearch}) {

    return(
        <div>
            <Typography>
                Search by Disc Brand or Mold:
            </Typography>
            <Input
                sx={{ml:2}}
                type="text"
                placeholder="Brand or Mold"
                onChange={handleSearch}
            />
        </div>
    )
}

export default SearchBar;