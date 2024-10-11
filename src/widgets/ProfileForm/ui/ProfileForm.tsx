import "./ProfileForm.css";
import React, { FC, useState } from "react";
import { ProfileInput } from "../../../entities/ProfileInput";
import { Button, IMasterReponse, MasterApi } from "../../../shared";
import { useNavigate } from "react-router";

export interface IProfileForm {
  Master: IMasterReponse;
  logout: Function;
}

export const ProfileForm: FC<IProfileForm> = (props) => {
  const { Master, logout } = props;
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>(Master.email);
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>(Master.phoneNumber);
  const btnContent = isUpdating ? "Saqlash" : "O'zgartirish";
  // update function

  async function handleLogout() {
    navigate("/");
    await logout();
  }

  async function handleClick() {
    if (isUpdating) {
      // Check if new password is provided
      if (newPassword && password !== newPassword) {
        alert("Parollar mos emas!");
        return;
      }

      // Prepare data for update
      const data: any = {
        id: Master.id,
        email,
        phoneNumber,
      };

      // Only include password if it is being updated
      if (password) {
        data.password = password; // Only set password if it's provided
      }

      try {
        const updatedMaster: any = await MasterApi.updateMaster(
          Master.id,
          data
        );
        if (typeof updatedMaster !== "string") {
          alert("Malumotlar yangilandi");
          setPassword(""); // Clear password field
          setNewPassword(""); // Clear new password field
          localStorage.setItem("Master", JSON.stringify(updatedMaster.data));
        } else {
          alert(updatedMaster);
        }
      } catch (error) {
        console.log("Error in update Master: " + error);
      }
    }

    setIsUpdating(!isUpdating);
  }
  return (
    <form className="profile-form">
      <ProfileInput
        disabled={true}
        value={Master?.firstName}
        name="firstName"
        placeholder="Ismi"
      />
      <ProfileInput
        disabled={true}
        value={Master?.firstName}
        name="lastName"
        placeholder="Familiya"
      />
      <ProfileInput
        disabled={true}
        value={Master.passportNumber}
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
