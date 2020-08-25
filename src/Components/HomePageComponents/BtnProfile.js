import React from 'react';
import {Link} from "react-router-dom";

// class BtnProfile extends React.Component {
function BtnProfile() {
    // render() {
        return (
            <div className="btn-group d-flex justify-content-end filter-container">
                <div>
                    <button
                        type="button"
                        className="btn btn-primary dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        {/*Профиль*/}
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-fill"
                             fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                    </button>
                    <div className="dropdown-menu shadow p-3 mb-5 bg-white rounded">
                        <a className="dropdown-item" href="#">Главная</a>
                        <a className="dropdown-item" href="#">Пользователи</a>
                        <a className="dropdown-item" href="#">Товары</a>
                        <a className="dropdown-item" href="#">Заказы</a>
                        <div className="dropdown-divider"/>

                        <Link to='/login'>
                            <button className="dropdown-item" href="#">Выход</button>
                        </Link>

                    </div>
                </div>
            </div>
        );
    // }
}

export default BtnProfile;
