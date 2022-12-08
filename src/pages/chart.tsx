import dynamic from "next/dynamic";
import React from "react";

// Chartの場合はIgniteWrapperではなく直接dynamic importしないとエラーが出る
const Chart = dynamic(() => import("../components/Chart"), {
  ssr: false,
});

const Main = () => {
  return <Chart />;
};

export default Main;
