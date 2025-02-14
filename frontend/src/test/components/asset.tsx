import React from "react";
import * as a from '../../type/alias'
import Close_panel from "../../components/asset/close_panel";

export default function Test_asset(){
    return <>
    <Close_panel 
        name={"Jotaro" as a.name} 
        jsx_element={<h1>Star Platinum</h1>}
    />
    </>
}