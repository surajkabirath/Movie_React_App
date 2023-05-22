import React from "react";
import "./spinner.css"
import loader from "../image/Eclipse-1.4s-132px.svg"
const Spinner = () => {
  return (
    <div className="loader">
     <img src={loader} alt="" />   

    </div>
   

  );
};

export default Spinner;
