import React from "react";
import { DateRangePicker } from "rsuite";
import "./datepicker.css";

function Datepicker({ onDateChange }) {
  const handleDateChange = (value) => {
    if (value !== null) {
      // Convert the selected start and end dates to the desired format
      const startDate = value[0]?.toISOString().slice(0, 10);
      const endDate = value[1]?.toISOString().slice(0, 10);

      // Call the provided callback function with the formatted start and end dates
      onDateChange(startDate, endDate);
    } else {
      onDateChange("", "");
    }
  };

  return (
    <div className="dates">
      <DateRangePicker format="yyyy.MM.dd" onChange={handleDateChange} cleanable={true} />
    </div>
  );
}

export default Datepicker;
