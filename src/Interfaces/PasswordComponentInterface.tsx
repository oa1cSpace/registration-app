import {ChangeEvent} from "react";

export interface PasswordComponentInterface {
    text:string,
    type: 'button' | 'reset' | 'submit' | undefined,
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    form: string,
    name: string
}