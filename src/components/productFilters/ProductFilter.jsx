import React from "react";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import "./filter.css";

export const ProductFilter = ({ maxPrice, minPrice, onChange }) => {
  const [max, setMax] = useState(maxPrice);
  const [min, setMin] = useState(minPrice);
  return (
    <div className="filter">
      <button className="btn" onClick={() => onChange(max, min)}>
        Filter
        <FilterAltIcon />
      </button>
      <Grid container spacing={2}>
        <Grid item>
          <TextField
            value={max}
            label="Max"
            onChange={(e) => setMax(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            value={min}
            label="Min"
            onChange={(e) => setMin(e.target.value)}
          />
        </Grid>
      </Grid>
    </div>
  );
};
