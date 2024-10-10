import "./User.css";
import React from "react";
import { Button, IStudentReponse } from "../../../shared";
import { ProfileForm } from "../../../widgets/ProfileForm/ui/ProfileForm";
import { useLoginStore } from "../../../widgets/FormAuthorization/model/loginModel";

export const User = () => {
  const student = useLoginStore((state) => state.studentInfo);
  const logout = useLoginStore((state) => state.logout);
  return (
    <div className="container">
      <div className="profile-wrapper">
        <ProfileForm student={student as IStudentReponse} logout={logout} />
        <div>
          <img
            className="profile-image"
            src="https://cdn.vectorstock.com/i/1000v/23/70/man-avatar-icon-flat-vector-19152370.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
