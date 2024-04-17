import { memo } from "react";
import ThemeMode from "../ThemeMode";

const NavBar = () => {
  return (
    <div className="flex-row box justify-between">
      <nav>
        <div></div>
      </nav>
      <ThemeMode />
    </div>
  );
};

export default memo(NavBar);
