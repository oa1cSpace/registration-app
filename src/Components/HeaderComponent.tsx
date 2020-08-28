import * as React from 'react';
import PComponent from './PComponent';
import {HeaderComponentInterface} from "../Interfaces/HeaderComponentInterface";
import {ReactElement} from "react";

const HeaderComponent= (props: HeaderComponentInterface): ReactElement => {
    const {title, className} = props;

    return (
        <div>
            <h1 className={className}>{title}</h1>
            <PComponent className="registrationForm__text" text="Для регистрации укажите Ваши данные.
        Все текстовые поля обязательны для заполнения"/>
        </div>
    );
}

export default HeaderComponent;
