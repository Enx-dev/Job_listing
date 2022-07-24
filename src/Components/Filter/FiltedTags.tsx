import React from "react";
import { useFilter } from "../../hooks/useFilter";
type Props = {
  label: string;
};

const FiltedTags = ({ label }: Props) => {
  const { removeFilter } = useFilter();
  return (
    <div className="flex  h-10">
      <div className="bg-primaryBackground rounded-l-md  text-center p-2 text-lg font-bold text-DesaturatedDarkCyan">
        {label}
      </div>
      <button
        onClick={() => removeFilter(label)}
        className="hover:bg-primaryDarkGrayishCyan h-full cursor-pointer border-none rounded-r-md grid place-content-center p-2 bg-DesaturatedDarkCyan">
        <img
          className="w-6 object-scale-down cursor-pointer"
          src="/images/icon-remove.svg"
          alt=""
        />
      </button>
    </div>
  );
};

export default FiltedTags;
