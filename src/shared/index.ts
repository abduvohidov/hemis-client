export { Button } from "./ui/Button";
export { Input } from "./ui/Input";
export { Label } from "./ui/Label";
export { Title } from "./ui/Title";
export { Select } from "./ui/Select/select";

export { baseApi } from "./api/base.api";

//user
export { userApi } from "./api/user/user.api";
export type { IUser, IUserReponse } from "./api/user/user.types";

//login
export { loginApi } from "./api/login/login.api";
export type { LoginRequest, LoginResponse } from "./api/login/login.types";

//Master

export { MasterApi } from "./api/master/master.api";
export type {
  IMaster,
  IMasterDeletedResponse,
  IMasterReponse,
} from "./api/master/master.types";

//education
export { educationApi } from "./api/education/education.api";
export type {
  IEdcationResponse,
  IEducation,
} from "./api/education/education.types";

//article
export { articleApi } from "./api/article/article.api";
export type { IArticle } from "./api/article/article.types";

//addresses
export { addressApi } from "./api/address/address.api";
export type { IAddressResponse, IAddress } from "./api/address/address.types";

//bachelor
export { bachelorApi } from "./api/bachelor/bachelor.api";
export type {
  IBachelor,
  IBachelorResponse,
} from "./api/bachelor/bachelor.types";

//faculty
export { facultyApi } from "./api/faculty/faculty.api";
export type { IFaculty, IFacultyReponse } from "./api/faculty/faculty.types";
