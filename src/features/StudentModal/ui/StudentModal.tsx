import React from "react";
import { Input, Button, IStudent } from "../../../shared";
import { useStudentStore } from "../models/student";

interface StudentModalProps {
  onSubmit: (studentData: IStudent) => Promise<void>;
}

export const StudentModal: React.FC<StudentModalProps> = ({ onSubmit }) => {
  const {
    lastName,
    firstName,
    middleName,
    passportNumber,
    jshshr,
    dateOfBirth,
    gender,
    nationality,
    email,
    phoneNumber,
    parentPhoneNumber,
    password,
    setStudentField,
    resetStudentData,
  } = useStudentStore();

  const handleSave = () => {
    const studentData: IStudent = {
      lastName,
      firstName,
      middleName,
      passportNumber,
      jshshr,
      dateOfBirth,
      gender,
      nationality,
      email,
      phoneNumber,
      parentPhoneNumber,
      password,
    };

    onSubmit(studentData);
    console.log("onSubmit: ", studentData);
    resetStudentData();
  };

  return (
    <div
      className="modal fade"
      id="exampleStudentModal"
      aria-labelledby="exampleMoudalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleStudentModalLabel">
              Student Malumotini yangilash
            </h1>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-4 my-1">
                <Input
                  placeholder="Familya"
                  value={lastName}
                  handleChange={(e) =>
                    setStudentField("lastName", e.target.value)
                  }
                  className="form-control w-100"
                />
              </div>
              <div className="col-lg-4 my-1">
                <Input
                  placeholder="Ism"
                  value={firstName}
                  handleChange={(e) =>
                    setStudentField("firstName", e.target.value)
                  }
                  className="form-control w-100"
                />
              </div>
              <div className="col-lg-4 my-1">
                <Input
                  placeholder="Ota-Ism"
                  value={middleName}
                  handleChange={(e) =>
                    setStudentField("middleName", e.target.value)
                  }
                  className="form-control w-100"
                />
              </div>
              <div className="col-lg-4 my-1">
                <Input
                  placeholder="Passport Raqam"
                  value={passportNumber}
                  handleChange={(e) =>
                    setStudentField("passportNumber", e.target.value)
                  }
                  className="form-control w-100"
                />
              </div>
              <div className="col-lg-4 my-1">
                <Input
                  placeholder="Jshshr"
                  value={jshshr}
                  handleChange={(e) =>
                    setStudentField("jshshr", e.target.value)
                  }
                  className="form-control w-100"
                />
              </div>
              <div className="col-lg-4 my-1">
                <Input
                  placeholder="Tugilgan sanasi"
                  value={dateOfBirth}
                  handleChange={(e) =>
                    setStudentField("dateOfBirth", e.target.value)
                  }
                  className="form-control w-100"
                />
              </div>
              <div className="col-lg-4 my-1">
                <Input
                  placeholder="Jinsi"
                  value={gender}
                  handleChange={(e) =>
                    setStudentField("gender", e.target.value)
                  }
                  className="form-control w-100"
                />
              </div>
              <div className="col-lg-4 my-1">
                <Input
                  placeholder="Millati"
                  value={nationality}
                  handleChange={(e) =>
                    setStudentField("nationality", e.target.value)
                  }
                  className="form-control w-100"
                />
              </div>
              <div className="col-lg-4 my-1">
                <Input
                  placeholder="Email"
                  value={email}
                  handleChange={(e) => setStudentField("email", e.target.value)}
                  className="form-control w-100"
                />
              </div>
              <div className="col-lg-4 my-1">
                <Input
                  placeholder="Telefon Raqami"
                  value={phoneNumber}
                  handleChange={(e) =>
                    setStudentField("phoneNumber", e.target.value)
                  }
                  className="form-control w-100"
                />
              </div>
              <div className="col-lg-4 my-1">
                <Input
                  placeholder="Ota-ona Telefon Raqami"
                  value={parentPhoneNumber}
                  handleChange={(e) =>
                    setStudentField("parentPhoneNumber", e.target.value)
                  }
                  className="form-control w-100"
                />
              </div>
              <div className="col-lg-4 my-1">
                <Input
                  placeholder="parol"
                  value={password}
                  handleChange={(e) =>
                    setStudentField("password", e.target.value)
                  }
                  className="form-control w-100"
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <Button color="light" toggleStudentModal="modal">
              Yopish
            </Button>
            <Button
              color="primary"
              toggleStudentModal="modal"
              onClick={handleSave}
            >
              Saqlash
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
