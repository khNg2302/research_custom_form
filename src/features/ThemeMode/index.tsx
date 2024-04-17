"use client";
import Button from "@/components/Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const ThemeMode = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  let opositeTheme = !searchParams.get("theme")
    ? null
    : searchParams.get("theme") === Theme.LIGHT
    ? Theme.DARK
    : Theme.LIGHT;

  const changeTheme = useCallback(
    (theme: string) => {
      const query = new URLSearchParams(searchParams);
      query.set("theme", theme);
      router.replace(pathname + "?" + query.toString());
      localStorage.setItem('theme',theme)
    },
    [pathname, router, searchParams]
  );

  useEffect(() => {
    const themeStore = localStorage.getItem("theme") || Theme.LIGHT;
    if (!searchParams.get("theme")) changeTheme(themeStore);
  }, [changeTheme, searchParams]);
  return (
    <>
      {opositeTheme && (
        <Button onClick={() => changeTheme(opositeTheme as string)}>
          <div>{opositeTheme}</div>
        </Button>
      )}
    </>
  );
};

export default ThemeMode;
