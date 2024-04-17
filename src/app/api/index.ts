interface ErrorField {
  field: string;
  message: string;
}

interface ListResult<T> {
  data: T[];
}

export interface ResponseJSONInterface<T> {
  code: number;
  successfull: boolean;
  message: string;
  errors?: ErrorField[];
  result?: ListResult<T> | T;
}

export const ResponseJSON = <T>({
  code,
  successfull,
  message,
  errors,
  result,
}: ResponseJSONInterface<T>) => {
  return { code, successfull, message, errors, result };
};
