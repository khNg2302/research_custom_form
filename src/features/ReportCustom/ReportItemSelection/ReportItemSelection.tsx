import ReportSelectionType from "@/app/types/Report/ReportSelectionType";
import ItemSelect from "./ItemSelect";

const ReportItemSelection = () => {
  const selection: ReportSelectionType = [
    {
      uuid: "11",
      name: "Text",
      itemProps: {
        layoutId: 0,
        uuid: "",
        type: "text",
        props: {
          content: "text edit",
        },
      },
    },
    {
      uuid: "22",
      name: "Image",
      itemProps: {
        layoutId: 0,
        uuid: "",
        type: "image",
        props: {
          url: "image url /",
        },
      },
    },
    {
      uuid: "33",
      name: "Layout",
      itemProps: {
        layoutId: 0,
        uuid: "",
        type: "layout",
        props: {
          id: 0,
          parentId: 0,
        },
      },
    },
  ];
  return (
    <div>
      {selection.map((item) => (
        <ItemSelect
          key={item.uuid}
          name={item.name}
          itemProps={item.itemProps}
        />
      ))}
    </div>
  );
};

export default ReportItemSelection;
