import FormValues from "./FormValue";

type HandleChangeArrayObjectProps = {
  name: string;
  value: FormValues;
  indexObject: number;
};

type HandleChangeArrayObject = ({
  name,
  value,
  indexObject,
}: HandleChangeArrayObjectProps) => void;

export default HandleChangeArrayObject