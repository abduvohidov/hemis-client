import React from "react";
import "./FilterForm.css";
import { FILTER_STUDENT_CONTENT } from "../../../shared/consts";
import { FilterFormLayout } from "../../../entities/FilterFormLayout";

export const FilterForm = () => {
  // Search
  function submitForm() {}
  // get info from input/option
  function handleChange() {}

  return (
    <>
      <FilterFormLayout
        title="Oquvchi"
        submitForm={submitForm}
        handleChange={handleChange}
        content={FILTER_STUDENT_CONTENT}
      />
    </>
  );
};
