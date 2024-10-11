import "./User.css";
import React from "react";
import { Button, IMasterReponse } from "../../../shared";
import { ProfileForm } from "../../../widgets/ProfileForm/ui/ProfileForm";
import { useLoginStore } from "../../../widgets/FormAuthorization/model/loginModel";

export const User = () => {
  const Master = useLoginStore((state) => state.MasterInfo);
  const logout = useLoginStore((state) => state.logout);
  return (
    <div className="container">
      <div className="profile-wrapper">
        <ProfileForm Master={Master as IMasterReponse} logout={logout} />
        <div>
          <img
            className="profile-image"
            src="https://cdn.vectorstock.com/i/1000v/23/70/man-avatar-icon-flat-vector-19152370.jpg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};
