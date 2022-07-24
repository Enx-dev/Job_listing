import React from "react";
import { Box, Button } from "@mui/material";
import FiltedTags from "./FiltedTags";
import { useFilter } from "../../hooks/useFilter";

const Filter = () => {
  const { filter, clearFilter } = useFilter();
  console.log(filter);
  return (
    <Box className="bg-primaryFilter rounded-md shadow-lg shadow-DesaturatedDarkCyan/30 flex justify-between items-center min-h-12 px-4 py-8 relative w-[90vw] self-center -top-7">
      <div className="flex flex-wrap gap-3">
        {filter.map((item) => (
          <FiltedTags label={item} />
        ))}
      </div>
      <Button
        onClick={() => clearFilter()}
        className="hover:text-DesaturatedDarkCyan hover:underline hover:bg-transparent text-primaryGrayishCyan font-bold text-lg capitalize">
        Clear
      </Button>
    </Box>
  );
};

export default Filter;
