/*
   Copyright (C), 2023-2024, Mikael Laine (mikael)
   Author: Mikael Laine
   FileName: Loader.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center relative">
      <span
        style={{ fontFamily: "SuperMario",color:'dodgerblue' }}
        className="absolute text-xl"
      >
        M
      </span>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
