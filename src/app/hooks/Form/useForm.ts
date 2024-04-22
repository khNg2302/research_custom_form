import FormProps from "@/app/types/Form/FormProps";
import HandleChange from "@/app/types/Form/HandleChange";
import HandleChangeArrayObject from "@/app/types/Form/HandleChangeArrayObject";
import Status from "@/app/types/Form/Status";
import {
  ArrayObjectField,
  ObjectField,
} from "@/app/types/ObjectField";
import updateArrayObject from "@/utils/updateArrayObject";
import { useCallback, useEffect, useState } from "react";

let id = Math.random() * 10;

const useForm = <T>({ initialDefault, handleSubmit }: FormProps<T>) => {
  const [data, setData] = useState<T>(initialDefault);
  const [status, setStatus] = useState<Status>("null");

  const handleObjectFieldsChangeEvent: HandleChange = ({ name, value }) => {
    setData({ ...data, [name]: value });
  };

  const handleArraySpecificObjectChangeEvent: HandleChangeArrayObject = ({
    name,
    value,
    indexObject,
  }) => {
    const newData = updateArrayObject(data as any, { name, value, indexObject });
    setData(newData as T);
  };

  const handleAddArrayObjectChangeEvent = (object: ObjectField) => {
    setData([...(data as ArrayObjectField), object] as T);
  };

  const handleSubmitForm = useCallback(async () => {
    await handleSubmit(data);
    setStatus("null");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleSetStatus = (status: Status) => {
    setStatus(status);
  };

  useEffect(() => {
    switch (status) {
      case "valid":
        handleSubmitForm();
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return {
    data,
    status,
    handleSetStatus,
    handleObjectFieldsChangeEvent,
    handleArraySpecificObjectChangeEvent,
    handleAddArrayObjectChangeEvent,
  };
};

export default useForm;
