import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Admin } from "./Admin";
import { User } from "./User";
import { Error } from "./Error/Error";

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};
