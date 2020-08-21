import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

class BurgerMenuComponent extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="d-flex justify-content-between">
        <Menu outerContainerId="outer-container">
          <a id="home" className="menu-item mb-2" href="/home">
            <span className="material-icons icon-bar md-20">
              home
            </span>
            {' '}
            Главная
          </a>
          <a id="about" className="menu-item mb-2" href="/home">
            {' '}
            <span
              className="material-icons icon-bar md-18"
            >
              face
            </span>
            {' '}
            Пользователи
          </a>
          <a id="contact" className="menu-item mb-2" href="/home">
            {' '}
            <span
              className="material-icons icon-bar md-18"
            >
              store
            </span>
            {' '}
            Товары
          </a>
          <a onClick={this.showSettings} className="menu-item" href="/home">
            <span
              className="material-icons icon-bar md-18"
            >
              assignment
            </span>
            {' '}
            Заказы
          </a>
        </Menu>
        <main id="page-wrap">
          <Dropdown className="mt-4 mr-4">
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              <span className="material-icons icon-prof md-24">account_circle</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/home">Мой профиль</Dropdown.Item>
              <Dropdown.Item href="/home">Выход</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </main>
      </div>
    );
  }
}

/* export default BurgerMenuComponent; */
