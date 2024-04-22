"use client";
import FormFieldProps from "@/app/types/Form/FormField";
import FormValues from "@/app/types/Form/FormValue";
import Status from "@/app/types/Form/Status";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

const useFormField = ({
  rules,
  lastField,
  value,
  status,
  handleChange,
  handleSetStatus,
}: FormFieldProps) => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleValid = useCallback(
    (valueCurrent: FormValues) => {
      if (!rules) return "valid";

      let status: Status = "null";
      let ruleIndex = 0;
      while (status === "null") {
        if (!rules[ruleIndex]) {
          status = "valid";
          break;
        }

        const { required, validator, message } = rules[ruleIndex];

        if (required) {
          if (valueCurrent === "") {
            status = "invalid";
            setErrorMessage(message);
            break;
          }
        }

        if (validator && !validator(valueCurrent)) {
          status = "invalid";
          setErrorMessage(message);
          break;
        }

        ruleIndex++;
      }

      return status;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [rules]
  );

  const onValid = useCallback(
    (status: Status) => {
      if (!handleSetStatus || !status) return;

      switch (status) {
        case "invalid":
          handleSetStatus("invalid");
          break;
        case "valid":
          if (lastField) handleSetStatus("valid");
          break;
      }
    },
    [handleSetStatus, lastField]
  );

  const hanleEventChange = (e: ChangeEvent<any>) => {
    if (!e.target.name) return;

    handleChange({ name: e.target.name, value: e.target.value });
  };

  useEffect(() => {
    switch (status) {
      case "validating":
      case "invalid":
        setErrorMessage("");
        onValid(handleValid(value));
        break;
      case "null":
        if (errorMessage) setErrorMessage("");
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return {
    errorMessage,
    hanleEventChange,
    handleChange,
  };
};

export default useFormField;
