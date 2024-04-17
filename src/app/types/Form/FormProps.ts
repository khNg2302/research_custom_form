import HandleSubmit from "./HandleSubmit";

type FormProps<T> = {
  initialDefault: T;
  handleSubmit: HandleSubmit<T>;
};

export default FormProps;
