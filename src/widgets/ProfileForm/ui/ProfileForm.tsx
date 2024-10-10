import "./ProfileForm.css";
import React, { FC, useState } from "react";
import { ProfileInput } from "../../../entities/ProfileInput";
import { Button, IStudentReponse, studentApi } from "../../../shared";
import { useNavigate } from "react-router";

export interface IProfileForm {
  student: IStudentReponse;
  logout: Function;
}

export const ProfileForm: FC<IProfileForm> = (props) => {
  //props
  const { student, logout } = props;
  //use States
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>(student.email);
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>(student.phoneNumber);
  // imports && contents
  const btnContent = isUpdating ? "Saqlash" : "O'zgartirish";
  // update function

  async function handleLogout() {
    navigate("/login");
    await logout();
  }

  async function handleClick() {
    try {
      setIsUpdating(!isUpdating);
      const data = {
        id: student.id,
        email,
        password,
        phoneNumber,
      };
      if (btnContent === "Saqlash" && password === newPassword) {
        const updatedStudent: any = await studentApi.updateStudent(
          student.id,
          data
        );
        if (typeof updatedStudent !== "string") {
          alert("Malumotlar yangilandi");
          setPassword("");
          setNewPassword("");
          localStorage.setItem("student", JSON.stringify(updatedStudent.data));
        } else {
          alert(updatedStudent);
        }
      }
    } catch (error) {
      console.log("Error in update student :  " + error);
    }
  }

  return (
    <form className="profile-form">
      <ProfileInput
        disabled={true}
        value={student?.firstName}
        name="firstName"
        placeholder="Ismi"
      />
      <ProfileInput
        disabled={true}
        value={student?.firstName}
        name="lastName"
        placeholder="Familiya"
      />
      <ProfileInput
        disabled={true}
        value={student.passportNumber}
        name="passportNumber"
        placeholder="Passport raqami"
      />
      <ProfileInput
        disabled={!isUpdating}
        value={email}
        name="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <ProfileInput
        disabled={!isUpdating}
        isPhoneInput={true}
        value={phoneNumber}
        name="phoneNumber"
        placeholder="Telefon raqam"
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      />
      <ProfileInput
        disabled={!isUpdating}
        value={password}
        name="password"
        placeholder="Yangi parol"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <ProfileInput
        disabled={!isUpdating}
        value={newPassword}
        name="newPassword"
        placeholder="Parolni tasdiqlang"
        onChange={(e) => {
          setNewPassword(e.target.value);
        }}
      />
      <Button children={btnContent} onClick={handleClick} />
      <button className="logut-btn" onClick={handleLogout}>
        Profildan chiqish
      </button>
    </form>
  );
};