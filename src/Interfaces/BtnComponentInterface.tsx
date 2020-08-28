import React from "react";

export interface BtnComponentInterface {
    type: 'button' | 'submit' | 'reset' | undefined,
    text: string,
    onClick: (event: React.MouseEvent) => void,
    className: string,
    value: string
}