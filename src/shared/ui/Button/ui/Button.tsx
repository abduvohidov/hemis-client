import "../style/index.scss";

export const Button = ({ data }: any) => {
  return (
    <>
      <a href={data.link} className="text-decoration-none" target="_blank">
        <li className="button-social d-flex justify-content-center align-items-center">
          <i className={`${data.icon} button-social-icon`}></i>
        </li>
      </a>
    </>
  );
};
