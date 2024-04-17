import NavBar from "@/features/Navbar";
import { ReactNode } from "react";

export type AppTheme = {
  theme?: string;
};

interface AppPageProps extends AppTheme {
  children: ReactNode;
}

const AppPage = ({ theme, children }: AppPageProps) => {
  return (
    <div className="app-page" data-theme={theme}>
      <NavBar />
      {theme && children}
    </div>
  );
};

export default AppPage;
