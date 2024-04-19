import { DropdownItemProps } from "semantic-ui-react";
import DropItem from "./DropItem"
import HandleChange from "@/app/types/HandleChange";

const Text = ({
    reportFields,
    value,
    handleUpdateItem,
    indexObject,
  }: {
    value: any;
    reportFields: DropdownItemProps[];
    handleUpdateItem: HandleChange;
    indexObject: number;
  }) => {
    return (
        <DropItem value={value} handleUpdateItem={handleUpdateItem} reportFields={reportFields} indexObject={indexObject}>
            {({value})=>(
                <p>{value}</p>
            )}
        </DropItem>
    )
}

export default Text