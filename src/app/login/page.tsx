import AppPage, { AppTheme } from "@/components/AppPage";
import Login from "@/features/Login";

const LoginPage = ({ searchParams }: { searchParams: AppTheme }) => {
  return (
    <AppPage theme={searchParams.theme}>
      <Login searchParams={searchParams} />
    </AppPage>
  );
};
export default LoginPage;
