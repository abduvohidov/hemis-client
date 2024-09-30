import { Input, Label } from "../../../shared";

export const Home = () => {
  return (
    <main className="m-5">
      <Label />
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
