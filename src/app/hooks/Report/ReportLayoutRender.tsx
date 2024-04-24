import ReportItemLayoutProps from "@/app/types/Report/ReportItemLayoutProps";
import ReportItems from "@/consts/ReportItems";

const ReportLayoutRender = ({
  layoutItems,
  reportCustomState,
  ...res
}: ReportItemLayoutProps) => {
  const render = () => {
    return layoutItems.map((item) => {
      const Comp = ReportItems[item.type]() as any;

      return (
        <Comp
          key={item.uuid}
          {...item.props}
          //Comp is layout item
          {...res}
          handleSetActiveLayoutId={res.handleSetActiveLayoutId}
          activeLayoutId={res.activeLayoutId}
          layoutId={item.props.id}
          reportCustomState={reportCustomState}
          layoutItems={reportCustomState[item.props.id]}
          layoutProps={item.props}
          parentLayoutItems={layoutItems}
        />
      );
    });
  };

  return {
    render,
  };
};

export default ReportLayoutRender;
