import { db } from "@/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { ResponseJSON } from "..";

const loginFieldResponse = () => {
  return ResponseJSON({
    code: 500,
    successfull: false,
    message: "Tên người dùng hoặc mật khẩu không đúng",
  });
};

export const POST = async (request: Request) => {
  const { password, username } = await request.json();
  const q = query(collection(db, "account"), where("username", "==", username));
  let successfull = null;
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.size) {
    return Response.json(loginFieldResponse());
  }

  querySnapshot.forEach((doc) => {
    const passwordCorrect = doc.data().password;
    if (passwordCorrect === password) {
      successfull = true;
    }
  });

  if (successfull === true) {
    return Response.json(
      ResponseJSON({
        code: 200,
        successfull,
        message: "Đăng nhập thành công",
      })
    );
  }

  return Response.json(loginFieldResponse());
};
