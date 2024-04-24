import RepeatedRenderHookProps from "@/app/types/hooks/RepeatedRender/Props";
import RenderHandle from "@/app/types/hooks/RepeatedRender/RenderHandle";

const useRepeatedRender = ({ items }: RepeatedRenderHookProps) => {
  const repeatedRender = ({itemComponentSelection, itemTypePropertyName, itemPropsPropertyName}: RenderHandle) => {
    return items.map((item)=>{
        const Component = itemComponentSelection[item[itemTypePropertyName]]()
        return <Component key={item.uuid} {...item[itemPropsPropertyName]} /> 
    })
  };

  return { repeatedRender };
};

export default useRepeatedRender;
