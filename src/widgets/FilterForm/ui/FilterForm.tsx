import "./FilterForm.css";
import React, { FormEvent } from "react";
import { useFormStore } from "../model/formStore";
import {
  FILTER_BACHELOR_CONTENT,
  FILTER_EDUCATION_CONTENT,
  FILTER_Master_CONTENT,
  FILTER_ARTICLES_CONTENT,
  FILTER_FACULTY_CONTENT,
  FILTER_ADDRESS_CONTENT,
} from "../../../shared/consts";
import { FilterFormLayout } from "../../../entities/FilterFormLayout";
import { Button } from "../../../shared";

export const FilterForm = () => {
  const { formData, setInputValue, filterData } = useFormStore();

  function submitForm(e: FormEvent) {
    e.preventDefault();
    try {
      filterData(formData);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  function handleClick() {
    try {
      filterData(formData);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setInputValue(name, value);
  }

  return (
    <>
      <div className="accordion" id="filterAccordion">
        <FilterFormLayout
          title="Shaxsiy ma'lumotlar bo'yicha izlash"
          submitForm={submitForm}
          handleChange={handleChange}
          content={FILTER_Master_CONTENT}
        />
        <FilterFormLayout
          title="OTM bo'yicha izlash"
          submitForm={submitForm}
          handleChange={handleChange}
          content={FILTER_EDUCATION_CONTENT}
        />
        <FilterFormLayout
          title="Tugatkan OTM bo'yicha izlash"
          submitForm={submitForm}
          handleChange={handleChange}
          content={FILTER_BACHELOR_CONTENT}
        />
        <FilterFormLayout
          title="Turar joyi bo'yicha izlash"
          submitForm={submitForm}
          handleChange={handleChange}
          content={FILTER_ADDRESS_CONTENT}
        />
        <FilterFormLayout
          title="Maqola bo'yicha izlash"
          submitForm={submitForm}
          handleChange={handleChange}
          content={FILTER_ARTICLES_CONTENT}
        />
        <FilterFormLayout
          title="Fakultet bo'yicha izlash"
          submitForm={submitForm}
          handleChange={handleChange}
          content={FILTER_FACULTY_CONTENT}
        />
      </div>
      <Button
        className="me-auto w-100 my-4 cursor-pointer"
        onClick={handleClick}
      >
      <i className="bi bi-search"></i>
      <span className={"ms-1"}>Qidirish</span>
      </Button>
    </>
  );
};
