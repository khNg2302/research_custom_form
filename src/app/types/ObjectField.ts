import FormValues from "./Form/FormValue";

type ObjectField = {
  [field_name: string]: FormValues;
};

type ArrayObjectField = ObjectField[]

type FormData = ObjectField
  |ArrayObjectField;

export type  {FormData,ObjectField ,ArrayObjectField};
