"use client";
import { Creditial, login } from "@/actions/login";
import AsyncButton from "@/components/AsyncButton";
import Input from "@/components/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const Login = ({ searchParams }: any) => {
  const [formData, setFormData] = useState<Creditial>({
    username: "",
    password: "",
  });
  const router = useRouter()

  const handleOnChange = (e:ChangeEvent<any>)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleLogin = async () => {
    const {successfull} = await login(formData);

    if(successfull) router.replace("/")
  };
  return (
    <form className="flex-col box">
      <h1>Đăng nhập</h1>
      <Input
        theme={searchParams.theme}
        label="Tên người dùng"
        name="username"
        value={formData.username}
        onChange={handleOnChange}
      />
      <Input
        theme={searchParams.theme}
        label="Mật khẩu"
        name="password"
        value={formData.password}
        onChange={handleOnChange}
      />
      <AsyncButton
        theme={searchParams.theme}
        label="Xác nhận"
        onClick={handleLogin}
      />
      <Link data-theme={searchParams.theme} href='/register' className="flex-row justify-center">Đăng ký tài khoản</Link>
    </form>
  );
};

export default Login;
