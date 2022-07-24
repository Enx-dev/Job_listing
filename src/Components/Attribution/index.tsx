import React from "react";

type Props = {};

const Attribution = (props: Props) => {
  return (
    <div className="flex font-bold justify-center text-lg h-12 items-center">
      {" "}
      Challenge by&nbsp;
      <a
        className="text-DesaturatedDarkCyan no-underline"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer">
        Frontend Mentor &nbsp;
      </a>
      Coded by&nbsp;
      <a
        className="text-DesaturatedDarkCyan no-underline"
        href="https://portfollio-one.vercel.app/">
        ENX_DEV
      </a>
    </div>
  );
};

export default Attribution;
