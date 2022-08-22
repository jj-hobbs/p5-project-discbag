import React from "react";
import { Input } from "@mui/material";

function SearchBar({handleSearch}) {

    return(
        <div>
            Search by Disc Brand or Mold:
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