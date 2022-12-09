import dynamic from "next/dynamic";
import React from "react";

const Spreadsheet = dynamic(() => import("../components/Spreadsheet"), {
  ssr: false,
});

const Main = () => {
  return <Spreadsheet />;
};

export default Main;
