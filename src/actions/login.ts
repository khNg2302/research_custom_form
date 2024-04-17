import { post } from "@/axios";

export interface Creditial {
  username: string;
  password: string;
}

export const login = async (creditial: Creditial) => {
  return await post("/login", creditial);
};
