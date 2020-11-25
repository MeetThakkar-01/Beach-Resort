import React from "react";
import lodingGif from "../images/gif/loading-gear.gif";
export default function Loading() {
  return (
    <div className="loading">
      <h4>rooms data loading...</h4>
      <img src={lodingGif} alt="Loading.." />
    </div>
  );
}
