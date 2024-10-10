import React from "react";
import { User } from "./User";
import { Login } from "./Login";
import { Admin } from "./Admin";
import { Error } from "./Error/Error";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { getToken } from "../widgets/FormAuthorization/lib/cookie";

export const Routing = () => {
  const isProtected = getToken();
  const navigate = useNavigate();
  console.log(isProtected);

  return (
    <>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Login />} />

        {/* Protected routes */}
        <Route
          path="/admin"
          element={typeof isProtected === "string" ? <Admin /> : <Login />}
        />
        <Route
          path="/user"
          element={typeof isProtected === "string" ? <User /> : <Login />}
        />

        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};
