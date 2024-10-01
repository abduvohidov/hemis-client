export { Button } from "./ui/Button";
export { Input } from "./ui/Input";
export { Label } from "./ui/Label";
export { Title } from "./ui/Title";

export { baseApi } from "./api/base.api";

//user
export { userApi } from "./api/user/user.api";
export type { IUser, IUserReponse } from "./api/user/user.types";

//login
export { loginApi } from "./api/login/login.api";
export type { LoginRequest, LoginResponse } from "./api/login/login.types";

//student
export { studentApi } from "./api/student/student.api";
export type {
	IStudent,
	IStudentDeletedResponse,
	IStudentReponse,
} from "./api/student/student.types";
