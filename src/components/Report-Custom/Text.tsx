import { FC } from "react";
import TextItem from "@/app/types/Group/Items/TextItem";

const Text:FC<TextItem> = ({content}) => {
  return <p>Text: {content}</p>;
};

export default Text;
