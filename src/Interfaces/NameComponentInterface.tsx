import {ChangeEvent} from "react";

export interface NameComponentInterface {
    text: string,
    // type: 'button' | 'submit' | 'reset' | undefined,
    type:  string,
    pattern: string,
    placeholder: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    value: string,
    name: string,
    form: string,
    className: string,
}