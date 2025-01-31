import { JSX } from "react";

//  https://stackoverflow.com/questions/40209352/
//  how-to-specify-optional-default-props-with-typescript-for-stateless-functiona

type panel_type = {
    component:JSX.Element
    x_scroll_bar?:boolean,
    y_scroll_bar?:boolean,
    width?:number|undefined,
    height?:number|undefined
};

export default panel_type;
