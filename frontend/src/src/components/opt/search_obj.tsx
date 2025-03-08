import { useState, JSX, useReducer } from "react"
import * as a from "../../type/alias"
import { str_to_optmode_arr } from "../../utility/convert"
import OBJ_SELF from "../obj/obj_self"
import SEARCH_BAR from "./search_bar"
import PANEL from "../asset/panel"
import { act_namearr, use_namearr_t } from "../../array/act_objarr"

export default function SEARCH_OBJ<t extends {name:a.name}[]>({
    input_arr,
    jsx_additional = undefined,
}:{
    input_arr:use_namearr_t<t>
    jsx_additional?:(JSX.Element|undefined)[]|undefined
}){
    const [ss_show_arr, setss_show_arr] = useReducer(
        act_namearr,
        str_to_optmode_arr(input_arr.ss)
    )
    const [ss_select, setss_select] = useState<number|undefined>(undefined)

    const JSX_ARR = ss_show_arr.map((item,index)=>{
        if(item !== undefined && input_arr.ss[item.index] !== undefined){
            let jsx_item = undefined
            if (jsx_additional !== undefined && jsx_additional.length > item.index){
                jsx_item = jsx_additional[item.index]
            }
            return <div key={index}>
                <OBJ_SELF 
                input_arr = {input_arr}
                this_item={item.index}
                ss_select={{ss:ss_select, setss:setss_select}}
                jsx_additional={jsx_item ? jsx_item : <></>}
                />
                <hr/>
                </div>
        }
        return undefined
    })
    return <>
    <SEARCH_BAR 
    opt_name={"Search bar" as a.opt_name}
    read_only_arr={input_arr.ss}
    setss_select_arr={setss_show_arr}
    />
    <PANEL jsx_element={<>{JSX_ARR}</>}/>
    </>
}