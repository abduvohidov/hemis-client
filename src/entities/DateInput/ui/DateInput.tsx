import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DateInput = ({
  placeholder,
  onChange,
  name,
  disabled = false,
}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    if (date) {
      const formattedDate = date.toISOString().split("T")[0];
      setSelectedDate(formattedDate)
      const e = { target: { name, value: formattedDate } };
      onChange(e);
    }
  };

  return (
    <DatePicker
      placeholderText={placeholder}
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="yyyy-MM-dd"
      disabled={disabled}
      className="form-control"
    />
  );
};
