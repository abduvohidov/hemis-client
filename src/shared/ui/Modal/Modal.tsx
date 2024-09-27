import React, { useState } from "react";
import { Input } from "../Input/Input";
import axios from "axios";
import { toast } from "react-toastify";

interface IModal {
  id: string;
  taskValue: string;
}

export const Modal: React.FC<IModal> = ({ id, taskValue }) => {
  const notifyError = () => toast.error("Не обновлено!");
  const notifySuccess = () => toast.success("Задача успешно обновлено!");
  const [value, setValue] = useState(taskValue);
  const base_url = "http://localhost:3000/tasks";

  async function updateData(id: string, data: object) {
    if (value.length) {
      const response = await axios.put(base_url + `/${id}`, data);
      notifySuccess();
      console.log(response.data);
    } else {
      notifyError();
    }
  }

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
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
              placeholder={taskValue}
              value={value}
              onChange={(e) => setValue(e.target.value)}
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
