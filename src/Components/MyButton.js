import { Button } from "@mui/material";
import React from "react";

export default function MyButton(props) {
  const { onClick, text, variant } = props;
  return (
    <div
      style={{ display: "flex", width: "100%", margin: "2px 60px 20px 10px " }}
    >
      <div style={{ width: "200px" }}> </div>
      <div>
        <Button
          style={{ width: "200px", marginLeft: "50px" }}
          onClick={onClick}
          variant={variant ? variant : "contained"}
        >
          {text}
        </Button>
      </div>
    </div>
  );
}
