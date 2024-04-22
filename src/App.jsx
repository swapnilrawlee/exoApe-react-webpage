import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Work from "./Components/Work";

const App = () => {

  return (
    <div className="w-screen ">
      <Navbar/>
      <Landing/>
      <Work/>
    </div>
  );
};

export default App;
