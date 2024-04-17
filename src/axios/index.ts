import { AxiosRequestConfig } from "axios";
import { instance } from "./instance";
import { ResponseJSONInterface } from "@/app/api";

export const post = <T>(
  url: string,
  data?: T,
  configs?: AxiosRequestConfig
) => {
  return instance.post(url, data, configs) as Promise<ResponseJSONInterface<T>>;
};
