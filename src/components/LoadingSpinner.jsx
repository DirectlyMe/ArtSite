import React from "react";
import { ReactComponent as Spinner } from "../images/spinner.svg";

const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "100px",
      marginBottom: "100px"
    }}>
    <Spinner />
  </div>
);

export default LoadingSpinner;
