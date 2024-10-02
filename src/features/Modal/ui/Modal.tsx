import React, { useState } from "react";
import { Input } from "../../../shared/ui/Input/index.ts";
import { IModal } from "../type.ts";
import { studentApi } from "../../../shared";

export const Modal: React.FC<IModal> = ({ id }) => {
  const [value, setValue] = useState<string | undefined>();

  async function updateData(id, data) {
    try {
      const response = await studentApi.updateStudent(id, data);
      console.log(response);
    } catch (error) {}
  }

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
              Update Task
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <Input
              placeholder={''}
              value={value}
              onChange={(e: any) => setValue(e.target.value)}
              className={"form-control w-100"}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => updateData(id, { name: value })}
              data-bs-dismiss="modal"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
