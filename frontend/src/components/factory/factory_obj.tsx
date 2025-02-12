import React, {JSX, useState, useEffect} from "react";
import * as a from "../../type/alias";
import Click_button from "../button/click_button";
import Input_str from "../input/input_str";
import { Str_to_h } from "../../utils/convert";
import { func_delete_arr, func_update_item, func_copy_item } from '../../utils/crud_arr'

export default function Factory_obj<t extends {name:a.name}>({
    arr,
    index,
    jsx_additional = undefined, 
}:{
    arr:a.use_state_t<t[]>
    index:number
    jsx_additional?:JSX.Element|undefined
}){
    const [ss_ui_mode, setss_ui_mode] = useState<"normal"|"rename"|"delete">("normal")
    const [ss_name, setss_name] = useState<string>(arr.ss[index].name as string)
    useEffect(()=>{
        setss_ui_mode("normal")
    },[arr.ss])
    let jsx_element = <></>
    if (ss_ui_mode === "normal"){
        jsx_element = <>
        <Click_button
            name={"rename" as a.name}
            func_event={(()=>{setss_ui_mode("rename")}) as a.func_event}
        />
        <Click_button
            name={"copy" as a.name}
            func_event={(()=>{func_copy_item(index,arr)}) as a.func_event}
        />
        {jsx_additional ? jsx_additional : <></>}
        <Click_button
            name={"x" as a.name}
            func_event={(()=>{setss_ui_mode("delete")}) as a.func_event}
        />
        </>
    }
    if (ss_ui_mode === "rename"){
        function func_rename(index:number){
            let update_input = arr.ss[index]
            update_input.name = ss_name as a.name
            func_update_item(index, arr, update_input)
        }
        jsx_element = <>
        <Input_str
            opt_name={"rename" as a.opt_name}
            input={{ss:ss_name, setss:setss_name}}
        />
        <Click_button name={"yes" as a.name} func_event={(()=>{func_rename(index)}) as a.func_event}/>
        <Click_button name={"no" as a.name}  func_event={(()=>{setss_ui_mode("normal")}) as a.func_event}/>
        </>
    }
    if (ss_ui_mode === "delete"){
        // https://stackoverflow.com/questions/15292278/
        // how-do-i-remove-an-array-item-in-typescript
        jsx_element = <>
            <Str_to_h opt_name={"Do you want to delete this ?" as a.opt_name}/>
            <Click_button name={"yes" as a.name} func_event={(()=>{func_delete_arr(index, arr)}) as a.func_event}/>
            <Click_button name={"no" as a.name}  func_event={(()=>{setss_ui_mode("normal")}) as a.func_event}/>
        </>
    }
    return jsx_element
}