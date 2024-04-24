import DraggableComponent from "@/app/hooks/Report/DraggableComponent";
import ItemReport from "@/app/types/Report/ItemReport";

const ItemSelect = ({
  itemProps,
  name,
}: {
  itemProps: ItemReport;
  name: string;
}) => {
  const { handleDragStart } = DraggableComponent(itemProps);
  return (
    <div draggable onDragStart={handleDragStart}>
      <p>{name}</p>
    </div>
  );
};

export default ItemSelect;
