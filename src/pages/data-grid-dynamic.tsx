import dynamic from "next/dynamic";
import React from "react";

const DataGrid = dynamic(() => import("../components/DataGrid"), {
  ssr: false,
});

const Main = () => {
  return <DataGrid />;
};

export default Main;
