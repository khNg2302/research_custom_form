'use client'
import useRepeatedRender from "@/app/hooks/RepeatedRender/useRepeatedRender";
import GroupProps from "@/app/types/Group/GroupProps";
import GroupItems from "@/consts/Group/GroupItems";
import { FC } from "react";

const Group: FC<GroupProps> = ({ items }: GroupProps) => {
  const { repeatedRender } = useRepeatedRender({ items });
  return (
    <div>
      <h2>Group</h2>
      <div>
        {repeatedRender({
          itemComponentSelection: GroupItems,
          itemTypePropertyName: "type",
          itemPropsPropertyName: "props",
        })}
      </div>
    </div>
  );
};

export default Group;
