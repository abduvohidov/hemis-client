import DatePicker from "react-datepicker";
import React, { FC, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

interface IDateInput {
  selected?: Date;
  placeholder: string;
  onChange: any;
  name: string;
  disabled?: boolean;
}

export const DateInput: FC<IDateInput> = ({
  selected,
  placeholder,
  onChange,
  name,
  disabled = false,
}) => {
  const [selectedDate, setSelectedDate] = useState(selected);

  const handleDateChange = (date) => {
    if (date) {
      const formattedDate = date.toISOString().split("T")[0];
      setSelectedDate(formattedDate);
      const e = { target: { name, value: date } };
      onChange(e);
    }
  };

  return (
    <DatePicker
      required
      disabled={disabled}
      dateFormat="yyyy-MM-dd"
      selected={selectedDate}
      className="form-control"
      onChange={handleDateChange}
      placeholderText={placeholder}
    />
  );
};
