import {ChangeEvent} from "react";

export interface EmaileComponentInterface {
    text: string,
    name: string,
    type: 'button' | 'submit' | 'reset' | undefined,
    placeholder: string,
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    form: string,
}