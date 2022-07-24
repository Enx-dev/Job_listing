import React from "react";
import { Button } from "@mui/material";
import { useFilter } from "../../../../hooks/useFilter";
type Props = {
  label: string;
};

const Tags = ({ label }: Props) => {
  const { updateFilter } = useFilter();

  const handleClick = () => {
    updateFilter(label);
  };
  return (
    <Button
      onClick={() => handleClick()}
      className="bg-primaryBackground hover:text-primaryFilter hover:bg-DesaturatedDarkCyan transition-colors duration-300 ease-in  text-DesaturatedDarkCyan font-bold text-base capitalize px-2 py-1 ">
      {label}
    </Button>
  );
};

export default Tags;
