import CustomFields from "@/app/types/Form/CustomField";
import HandleChange from "@/app/types/HandleChange";
import { useRef } from "react";

type PropertiesChangeFormProps ={
    customField: CustomFields;
    handleChange: HandleChange;
    handleChangeFormValue: HandleChange
}


const usePropertiesChangeForm = ({handleChange, customField,handleChangeFormValue}: PropertiesChangeFormProps) =>{


    const handleChangeFieldName :HandleChange = ({name,value}) => {
        
    } 

}