import "./User.css";
import { IMasterReponse } from "../../../shared";
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
            src={Master.avatarUrl}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};
