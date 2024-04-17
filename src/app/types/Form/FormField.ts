import FormValues from "./FormValue";
import HandleChange from "./HandleChange";
import HandleSetStatus from "./HandleSetStatus";
import Rules from "./Rules";
import Status from "./Status";

type FormFieldProps = {
  rules?: Rules[];
  status?: Status;
  lastField?: boolean;
  value: FormValues;
  handleChange: HandleChange;
  handleFocus?: (indexField:number) => void;
  handleSetStatus?: HandleSetStatus;
};

export default FormFieldProps;
