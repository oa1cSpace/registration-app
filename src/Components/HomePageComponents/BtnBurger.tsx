import * as React from 'react';
import {ReactElement} from "react";

export const BtnBurger = (): ReactElement => {

    return (
        <div className="vertical-navigation sticky-top filter-container">
            <div className="height_100">
                <nav className="navbar navbar-dark menu-btn-color rounded p-0">
                    <button
                        className="navbar-toggler p-0 "
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                </nav>
                {/* COLLAPSE_CARD_ITEMS */}
                <div className="height_100 collapse" id="navbarToggleExternalContent">
                    <div className="card card-body height_100 shadow p-3 mb-5 bg-white rounded">
                        <a className="nav-link active" href="#"> Главная </a>
                        <a className="nav-link active" href="#"> Пользователи </a>
                        <a className="nav-link active" href="#"> Товары </a>
                        <a className="nav-link active" href="#"> Заказы </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

