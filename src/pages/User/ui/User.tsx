import "./User.css";
import React from "react";
import { IArticle, IMaster } from "../../../shared";
import { ProfileForm } from "../../../widgets/ProfileForm/ui/ProfileForm";
import { useLoginStore } from "../../../widgets/FormAuthorization/model/loginModel";
import { UserArticleForm } from "../../../widgets/UserArticleForm/UserArticleForm";

export const User = () => {
  const logout = useLoginStore((state) => state.logout);
  const Master = useLoginStore((state) => state.MasterInfo);
  const article = useLoginStore((state) => state.ArticleInfo);

  return (
    <div className="container">
      <div className="profile-wrapper">
        <ProfileForm Master={Master as IMaster} logout={logout} />
        <div>
          <img className="profile-image" src={Master?.avatarUrl} alt="img" />
          <UserArticleForm article={article} />
        </div>
      </div>
    </div>
  );
};
