import { TextField } from "@mui/material";
import React from "react";

export default function MyTextField(props) {
  const { onChange, label, variant, text,type } = props;
  return (
    <div style={{display:"flex",width:"100%",margin:'2px 60px 20px 10px '}}>
      <div
        style={{width:"200px"}}
      >
        {text}{" "}
      </div>
      <div>
        <TextField
        type={type}
        style={{width:"230px",marginLeft:"50px"}}
          size="small"
          onChange={onChange}
          label={label}
          variant={variant ? variant : "outlined"}
        />
      </div>
    </div>
  );
}
