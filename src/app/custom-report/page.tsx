import AppPage, { AppTheme } from "@/components/AppPage";
import ReportCustom from "@/features/ReportCustom";

const CustomReport = ({ searchParams }: { searchParams: AppTheme }) => {
  return (
    <AppPage theme={searchParams.theme}>
      <h1>Custom report</h1>
      <ReportCustom />
    </AppPage>
  );
};

export default CustomReport;
