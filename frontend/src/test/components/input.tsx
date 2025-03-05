import React, {useState, JSX} from "react";
import * as a from '../../src/type/alias'
import INPUT_COMBINE from "../../src/components/input/input_combine";
import { opt_input_uit } from "../../src/components/opt/type";
import INPUT_FORM from "../../src/components/input/input_form";
import INPUT_STR from "../../src/components/input/input_str";

const DEFAULT_INPUT:(string|number)[] = [
    0.0001,
    1.4142,
    2.7182,
    3.1415,
    "Sir William Rowan Hamilton"
]

const OPT_MEDIA_ARR = ["3B1B", "Khan anademy", "Brilliant", "Shoulder of Giant", "Learn by Doing"]
const OPT_LEVEL = ["Beginner", "Elementary", "Intermediate", "Advance", "Genius"]

export function TEST_INPUT_FORM(){
    const [ss_obj, setss_obj] = useState<a.attr_value<number|string>[]>([
        {name:"Favorite Number No.0" as a.name, value:DEFAULT_INPUT[0]},
        {name:"Favorite Number No.1" as a.name, value:DEFAULT_INPUT[1]},
        {name:"Favorite Number No.2" as a.name, value:DEFAULT_INPUT[2]},
        {name:"Media" as a.name, value:0},
        {name:"Mode" as a.name, value:0},
        {name:"Favorite Number No.3" as a.name, value:DEFAULT_INPUT[3]},
        {name:"Scientist" as a.name, value:DEFAULT_INPUT[4]},
    ])
    const JSX_INPUT_FORM:JSX.Element = <INPUT_FORM
        opt_name={"Vector Space" as a.opt_name}
        arr={{ss:ss_obj, setss:setss_obj}}
        except_arr={["Media", "Mode"]}
        is_undo={true}
    />
    return <>
    {JSX_INPUT_FORM}
    </>
}

export function TEST_INPUT_COMBINE(){
    const [ss_obj, setss_obj] = useState<a.attr_value<number|string>[]>([
        {name:"Favorite Number No.0" as a.name, value:DEFAULT_INPUT[0]},
        {name:"Favorite Number No.1" as a.name, value:DEFAULT_INPUT[1]},
        {name:"Favorite Number No.2" as a.name, value:DEFAULT_INPUT[2]},
        {name:"Media" as a.name, value:0},
        {name:"Mode" as a.name, value:0},
        {name:"Favorite Number No.3" as a.name, value:DEFAULT_INPUT[3]},
        {name:"Scientist" as a.name, value:DEFAULT_INPUT[4]},
    ])
    const JSX_INPUT_FORM:JSX.Element = <INPUT_COMBINE
        opt_name={"Vector Space" as a.opt_name}
        input_str={{ss:ss_obj, setss:setss_obj}}
        input_opt={[
            {name:"Media" as a.name, value:OPT_MEDIA_ARR}, 
            {name:"Mode" as a.name, value:OPT_LEVEL}
        ]}
        is_undo={true}
    />
    return <>
    {JSX_INPUT_FORM}
    </>
}

export function TEST_INPUT_STR(){
    const [ss_song, setss_song] = useState<string>("R.I.P. Duolingo")
    return <>
        <INPUT_STR
            opt_name={"What is your favorite songs ?" as a.opt_name}
            input={{ss:ss_song, setss:setss_song}}
        />
    </>
}