import ReportLayout from "@/app/hooks/Report/ReportLayout";
import ReportLayoutProps from "@/app/types/Report/ReportLayoutProps";
import ReportItems from "@/consts/ReportItems";

const ReportCustom = ({ reportCustomState, ...props }: ReportLayoutProps) => {
  const { handleDrop } = ReportLayout({
    reportCustomState,
    ...props,
  });

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="flex-row gap box border"
    >
      {props.layoutItems.map((item) => {
        const Comp = ReportItems[item.type]() as any;

        return (
          <Comp
            key={item.uuid}
            {...item.props}
            //layout item
            {...props}
            layoutId={item.props.id}
            reportCustomState={reportCustomState}
            layoutItems={reportCustomState[item.props.id]}
            layoutProps={item.props}
            parentLayoutItems={reportCustomState[1]}
            activeLayoutId={props.activeLayoutId}
            handleSetActiveLayoutId={props.handleSetActiveLayoutId}
          />
        );
      })}
    </div>
  );
};

export default ReportCustom;
