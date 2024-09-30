import { Input } from "../../../shared";

export const Home = () => {
  return (
    <main className="m-5">
      <Input
        type={"text"}
        id={"IdInputFirst"}
        className={"w-50"}
        ariaDescribedby={"IdInputFirst"}
        placeholder={"Enter Placeholder"}
      />
    </main>
  );
};
