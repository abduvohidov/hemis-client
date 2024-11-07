import React from "react";
import { User } from "./User";
import { Login } from "./Login";
import { Admin } from "./Admin";
import { Error } from "./Error/Error";
import { Routes, Route, Navigate } from "react-router-dom";
import { getToken } from "../widgets/FormAuthorization/lib/cookie";

export const Routing = () => {
  const isProtected = getToken();
  const redirectTo = localStorage.getItem("role");

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/master"
          element={
            typeof isProtected === "string" && redirectTo === "master" ? (
              <User />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route
          path="/admin"
          element={
            typeof isProtected === "string" && redirectTo === "admin" ? (
              <Admin />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};
