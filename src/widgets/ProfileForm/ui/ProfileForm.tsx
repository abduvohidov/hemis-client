import "./ProfileForm.css";
import React, { FC, useState } from "react";
import { Button, IStudentReponse } from "../../../shared";
import { ProfileInput } from "../../../entities/ProfileInput";

export interface IProfileForm {
  student: IStudentReponse;
}

export const ProfileForm: FC<IProfileForm> = (props) => {
  const { student } = props;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

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
        disabled={false}
        value={email}
        name="email"
        placeholder="Email"
      />
      <ProfileInput
        disabled={false}
        value={phoneNumber}
        name="phoneNumber"
        placeholder="Telefon raqam"
      />
      <Button children="O'zgartirish" />
    </form>
  );
};
