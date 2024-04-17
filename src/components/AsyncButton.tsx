"use client";
import { ReactNode, useState } from "react";
import Button, { ButtonProps } from "./Button";

interface AsyncButtonProps extends ButtonProps {
  fallback?: ReactNode;
  onClick: () => Promise<any>;
}

const AsyncButton = ({
  label,
  fallback,
  onClick,
  ...res
}: AsyncButtonProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleOnClick = async () => {
    setLoading(true);

    await onClick();
    setLoading(false);
  };
  return (
    <Button type='button' label={label} {...res} onClick={handleOnClick}>
      {loading && (fallback ? fallback : <span>loading...</span>)}
    </Button>
  );
};

export default AsyncButton;
