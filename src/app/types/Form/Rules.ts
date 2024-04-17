type Rules = {
  message: string;
  required?: boolean;
  validator?: (value: string | number) => boolean;
};

export default Rules
