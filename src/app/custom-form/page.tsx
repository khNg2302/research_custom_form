"use client";
import AppPage, { AppTheme } from "@/components/AppPage";
import InputCustom from "@/components/Form-Custom/Input";
import { useState } from "react";
import HandleChange from "../types/Form/HandleChange";
import Status from "../types/Form/Status";
import Rules from "../types/Form/Rules";
import FormCustom from "@/features/FormCustom";

const CustomFormPage = ({ searchParams }: { searchParams: AppTheme }) => {
  return (
    <AppPage theme={searchParams.theme}>
      <div>
        <FormCustom />
      </div>
    </AppPage>
  );
};

export default CustomFormPage;
