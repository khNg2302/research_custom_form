import ComponentTransferType from "@/app/types/Report/ComponentTransferType";
import ItemOfSelection from "./ItemOfSelection";

const PanelItemSelection = () => {
  const items: ComponentTransferType[] = [
    {
      name: "Text",
      type: "text",
      value_field_name: "",
    },
  ];
  return (
    <div>
      {items.map((item) => (
        <ItemOfSelection key={item.type} item={item} name={item.name} />
      ))}
    </div>
  );
};

export default PanelItemSelection;
