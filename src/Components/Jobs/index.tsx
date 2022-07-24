import React from "react";
import Job from "./Job";
import { useFilter } from "../../hooks/useFilter";
type Props = {};

const Jobs = () => {
  const { newData } = useFilter();
  return (
    <section className="w-[90%] py-16 space-y-10 self-center max-w-5xl ">
      {newData.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </section>
  );
};

export default Jobs;
