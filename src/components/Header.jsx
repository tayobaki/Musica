import React from "react";
import CuratedPlaylist from "./CuratedPlaylist";
import TopChart from "./TopChart";
import Aside from "./Aside";

const Header = () => {
  return (
    <div className='mt-9 relative'>
      <div className='flex flex-col gap-10 lg:overflow-hidden lg:flex-row'>
        <Aside />
        <CuratedPlaylist />
        <TopChart />
      </div>
    </div>
  );
};

export default Header;
