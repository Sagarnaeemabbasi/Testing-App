import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MySelect(props) {
  const {
    onChange,
    value,
    label,
    helperText,
    RenderList,
    onBlur,
    emptyText,
    emptyValue,
    text,
  } = props;
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div
      style={{ display: "flex", width: "100%", margin: "2px 60px 20px 10px " }}
    >
      <div style={{ width: "200px" }}>{text} </div>
      <div>
        <FormControl
          sx={{ minWidth: 200, minHeight: 15 }}
          size="small"
          style={{ width: "230px", marginLeft: "50px" }}
        >
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={value}
            label={label}
            onChange={onChange}
            onBlur={onBlur}
          >
            <MenuItem value={emptyValue}>{emptyText}</MenuItem>
            {RenderList && RenderList.length > 0
              ? RenderList.map((element, index) => (
                  <MenuItem value={element} key={index}>
                    {element}
                  </MenuItem>
                ))
              : null}
          </Select>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      </div>
    </div>
  );
}
