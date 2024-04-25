import ReportItemLayoutProps from "@/app/types/Report/ReportItemLayoutProps";
import ReportItems from "@/consts/ReportItems";

const ReportLayoutRender = ({
  layoutItems,
  reportCustomState,
  ...res
}: ReportItemLayoutProps) => {
  const render = () => {
    return layoutItems.map((item, index) => {
      const Comp = ReportItems[item.type]() as any;

      return (
        <Comp
          key={item.uuid}
          //Comp is layout item
          {...res}
          indexLayout={index}
          handleSetActiveLayoutId={res.handleSetActiveLayoutId}
          activeLayoutId={res.activeLayoutId}
          layoutId={item.props.id}
          reportCustomState={reportCustomState}
          layoutItems={reportCustomState[item.props.id]}
          layoutProps={item}
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
