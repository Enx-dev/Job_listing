import React from "react";
import Top from "./Top";
import Bottom from "./Bottom/index";
type Props = {
  job: {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
  };
};

const Job = ({ job }: Props) => {
  const topInfo = {
    company: job.company,
    logo: job.logo,
    new: job.new,
    featured: job.featured,
    position: job.position,
    contract: job.contract,
    location: job.location,
    postedAt: job.postedAt,
  };
  const bottomInfo = {
    lanuages: job.languages,
    tools: job.tools,
    role: job.role,
    level: job.level,
  };
  return (
    <div className="flex ">
      {topInfo.featured && (
        <div className="bg-DesaturatedDarkCyan w-[2%] max-w-[10px] rounded-l-lg"></div>
      )}
      <div className="w-full  bg-white self-center rounded-md shadow-lg shadow-DesaturatedDarkCyan/30 flex space-y-4 lg:space-y-0 flex-col lg:flex-row lg:items-center lg:justify-between  px-3 py-5 lg:px-4 lg:py-10">
        <Top topInfo={topInfo} />
        <Bottom bottomInfo={bottomInfo} />
      </div>
    </div>
  );
};

export default Job;
