import ReportLayout from "@/app/hooks/Report/ReportLayout";
import ReportLayoutProps from "@/app/types/Report/ReportLayoutProps";
import DropArea from "@/components/Report-Custom/DropArea";
import ReportItems from "@/consts/ReportItems";

const ReportCustom = ({ reportCustomState, ...props }: ReportLayoutProps) => {
  const { handleDrop } = ReportLayout({
    reportCustomState,
    ...props,
  });

  return (
    <div className="flex-row report-layout">
      {props.layoutItems.map((item) => {
        const Comp = ReportItems[item.type]() as any;

        return (
          <Comp
            key={item.uuid}
            {...item}
            //layout item
            {...props}
            layoutId={item.props.id}
            reportCustomState={reportCustomState}
            layoutItems={reportCustomState[item.props.id]}
            layoutProps={item}
            parentLayoutItems={reportCustomState[1]}
            activeLayoutId={props.activeLayoutId}
            handleSetActiveLayoutId={props.handleSetActiveLayoutId}
          />
        );
      })}
      <DropArea
        activeLayoutId={props.activeLayoutId}
        layoutId={props.layoutId}
        handleDrop={handleDrop}
        handleSetActiveLayoutId={props.handleSetActiveLayoutId}
      />
    </div>
  );
};

export default ReportCustom;
