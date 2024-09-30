export interface UserProps {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  role: "user" | "admin" | "teacher" | "teamlead";
}
