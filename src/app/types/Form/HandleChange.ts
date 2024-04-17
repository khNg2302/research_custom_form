import FormValues from "./FormValue";

type HandleChangeProps = {
  name: string;
  value: FormValues;
};

type HandleChange = ({ name, value }: HandleChangeProps) => void;

export default HandleChange;
