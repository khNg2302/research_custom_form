"use client";
import AppPage, { AppTheme } from "@/components/AppPage";
import Report from "../types/Report/Report";
import ReportCustom from "@/features/ReportCustom/ReportCustom";
import { useState } from "react";
import ReportItemSelection from "@/features/ReportCustom/ReportItemSelection/ReportItemSelection";

const report: Report = {
  1: [
    {
      uuid: "11",
      layoutId: 1,
      type: "text",
      props: {
        content: "text 11",
      },
    },
    {
      uuid: "12",
      layoutId: 1,
      type: "layout",
      props: {
        parentId:1,
        id: 2,
      },
    },
    {
      uuid: "13",
      layoutId: 1,
      type: "layout",
      props: {
        parentId:1,
        id: 4,
      },
    },
  ],
  2: [
    {
      uuid: "21",
      layoutId: 2,
      type: "text",
      props: {
        content: "text 21",
      },
    },
    {
      uuid: "23",
      layoutId: 2,
      type: "layout",
      props: {
        parentId:2,
        id: 3,
      },
    },
  ],
  3: [
    {
      uuid: "31",
      layoutId: 3,
      type: "text",
      props: {
        content: "text 31",
      },
    },
  ],
  4: [
    {
      uuid: "41",
      layoutId: 4,
      type: "text",
      props: {
        content: "text 41",
      },
    },
  ],
};

const CustomReport = ({ searchParams }: { searchParams: AppTheme }) => {
  const [reportCustomState, setReportCustomState] = useState<Report>(report);
  const [activeLayoutId, setActiveLayoutId] = useState<null|number>(null);
  return (
    <AppPage theme={searchParams.theme}>
      <h1>Custom report</h1>
      <ReportItemSelection />
      <ReportCustom
        reportValues={{}}
        activeLayoutId={activeLayoutId}
        reportCustomState={reportCustomState}
        layoutId={1}
        layoutItems={reportCustomState[1]}
        handleChangeCustomReport={setReportCustomState}
        handleSetActiveLayoutId={setActiveLayoutId}
      />
    </AppPage>
  );
};

export default CustomReport;
