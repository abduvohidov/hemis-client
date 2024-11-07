import React from "react";

export const ManipulatePassword = ({
  className,
  passwordVisibilty,
  setPasswordVisibility,
}) => {
  function changePasswordVisibility() {
    if (passwordVisibilty === "text") {
      setPasswordVisibility("password");
    } else {
      setPasswordVisibility("text");
    }
  }
  function buttonContent() {
    if (passwordVisibilty === "text") {
      return <i className="bi bi-eye-slash"></i>;
    } else {
      return <i className="bi bi-eye"></i>;
    }
  }

  return (
    <button
      type="button"
      className={className}
      onClick={changePasswordVisibility}
    >
      {buttonContent()}
    </button>
  );
};
