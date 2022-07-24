import React from "react";
import data from "../../../../data.json";
type Props = {
  topInfo: {
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    contract: string;
    location: string;
    postedAt: string;
  };
};

const Top = ({ topInfo }: Props) => {
  return (
    <div className="relative lg:flex items-center -top-12 lg:space-x-4 pb-5 lg:pb-0 lg:top-0 space-y-2 border-b lg:border-none border-b-primaryGrayishCyan">
      <img className="w-16" src={topInfo.logo} alt="" />
      <div>
        <div className="flex items-center space-x-4">
          <h1 className="text-DesaturatedDarkCyan text-base">
            {topInfo.company}
          </h1>
          <div className="space-x-2 flex items-center">
            {topInfo.new && (
              <div className="  grid place-content-center pt-1 px-2 uppercase text-white font-bold bg-DesaturatedDarkCyan  rounded-3xl">
                new!
              </div>
            )}
            {topInfo.featured && (
              <div className="bg-primaryDarkGrayishCyan text-white uppercase rounded-3xl px-2 pt-1 font-bold">
                Featured
              </div>
            )}
          </div>
        </div>
        <h1 className="text-primaryGrayishCyan hover:text-DesaturatedDarkCyan text-lg transition-colors duration-200 ease-in cursor-pointer">
          {topInfo.position}
        </h1>
        <ul className="flex w-full space-x-8 text-primaryGrayishCyan  items-center">
          <li className="first:list-none">{topInfo.postedAt}</li>
          <li>{topInfo.contract}</li>
          <li>{topInfo.location}</li>
        </ul>
      </div>
    </div>
  );
};

export default Top;
