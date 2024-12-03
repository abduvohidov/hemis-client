import "./ProfileForm.css";
import { useNavigate } from "react-router";
import React, { FC, useState } from "react";
import { ProfileInput } from "../../../entities/ProfileInput";
import { Button, IMaster, IMasterReponse, masterApi } from "../../../shared";

export interface IProfileForm {
  Master: IMaster;
  logout: Function;
}

export const ProfileForm: FC<IProfileForm> = ({ Master, logout }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>(Master.email);
  const [newPassword, setNewPassword] = useState<string>("");
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [lastName, setLastName] = useState<string>(Master.lastName);
  const [firstName, setFirstName] = useState<string>(Master.firstName);
  const [phoneNumber, setPhoneNumber] = useState<string>(Master.phoneNumber);
  const [avatarUrl, setAvatarUrl] = useState<string | File>(Master.avatarUrl);

  const btnContent = isUpdating ? "Saqlash" : "O'zgartirish";

  const convertBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result as string);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  async function handleLogout(event: React.MouseEvent) {
    event.preventDefault();
    navigate("/");
    await logout();
  }

  async function handleClick(event: React.MouseEvent) {
    event.preventDefault();

    if (isUpdating) {
      if (password && password !== newPassword) {
        alert("Parollar mos emas!");
        return;
      }

      const data: Partial<IMaster> = {
        id: Master.id,
        email,
        phoneNumber,
        lastName,
        firstName,
        avatarUrl: typeof avatarUrl === "string" ? avatarUrl : undefined,
      };

      if (password) {
        data.password = password;
      }

      if (avatarUrl && typeof avatarUrl !== "string") {
        try {
          const base64Avatar = await convertBase64(avatarUrl);
          data.avatarUrl = base64Avatar;
        } catch (error) {
          console.error("Error converting image to base64: ", error);
          return;
        }
      }

      try {
        const updatedMaster: IMasterReponse = await masterApi.updateMaster(
          Number(Master.id),
          data
        );
        console.log(updatedMaster);
        if (updatedMaster.success) {
          alert("Malumotlar yangilandi ✅");
          setPassword("");
          setNewPassword("");
          localStorage.setItem(
            "Master",
            JSON.stringify(updatedMaster.message.data)
          );
          window.location.reload();
        } else {
          alert(updatedMaster);
        }
      } catch (error) {
        console.error("Error in update Master: ", error);
      }
    }
    setIsUpdating(!isUpdating);
  }

  return (
    <form className="profile-form">
      <ProfileInput
        disabled={!isUpdating}
        value={firstName}
        name="firstName"
        placeholder="Ismi"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <ProfileInput
        disabled={!isUpdating}
        value={lastName}
        name="lastName"
        placeholder="Familiya"
        onChange={(e) => setLastName(e.target.value)}
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
        onChange={(e) => setEmail(e.target.value)}
      />
      <ProfileInput
        disabled={!isUpdating}
        isPhoneInput={true}
        value={phoneNumber}
        name="phoneNumber"
        placeholder="Telefon raqam"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <ProfileInput
        disabled={!isUpdating}
        value={password}
        name="password"
        placeholder="Yangi parol"
        onChange={(e) => setPassword(e.target.value)}
      />
      <ProfileInput
        disabled={!isUpdating}
        value={newPassword}
        name="newPassword"
        placeholder="Yangi parolni qayta kiriting"
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="avatarUrl">
          Rasm qo'ying
        </label>
        <input
          name="avatarUrl"
          type="file"
          className="form-control"
          id="avatarUrl"
          onChange={(e) => setAvatarUrl(e.target.files[0])}
          disabled={!isUpdating}
        />
      </div>
      <Button onClick={handleClick}>{btnContent}</Button>
      <button className="logout-btn form-control" onClick={handleLogout}>
        Profildan chiqish
      </button>
    </form>
  );
};
