import React, { useState } from "react";
import { Input, Button } from "../../../shared";

export const Modal = () => {
  const [value, setValue] = useState<string | any>();

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Student Malumotini yangilash
            </h1>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-4">
                <Input
                  placeholder={"Ism"}
                  value={value}
                  handleChange={(e: any) => setValue(e.target.value)}
                  className={"form-control w-100"}
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <Button children={"Yopish"} color={"light"} toggleModal="modal" />
            <Button
              children={"Saqlash"}
              color={"primary"}
              toggleModal="modal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
