import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

export default function MyDatePicker(props) {
  const { label, text, value, onChange, onClose } = props;

  return (
    <div
      style={{ display: "flex", width: "100%", margin: "2px 60px 20px 10px " }}
    >
      <div style={{ width: "245px" }}>{text} </div>
      <LocalizationProvider
        style={{ width: "200px", height: 10, marginLeft: "50px" }}
        size="small"
        dateAdapter={AdapterDayjs}
      >
        <Stack spacing={3}>
          <DesktopDatePicker
            label={label}
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={onChange}
            // onClose={onClose}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  );
}
