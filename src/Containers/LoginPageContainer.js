import React from 'react';
import {Link} from "react-router-dom";
import LoginComponent from "../Components/LoginComponent";
import PasswordComponent from "../Components/PasswordComponent";
import BtnBackHome from "../Components/BtnBackHome";
import BtnComponents from "../Components/BtnComponents";
import {connect} from "react-redux";
import {clearForm, setErrors, setField, setLoggedIn} from "../redux/actions/login";

class LoginPageContainer extends React.Component {
    fields = {
        login: '',
        password: '',
    };

    componentDidMount() {
        this.props.clearForm(this.fields);
    }

    handleChange = ({target}) => {
        this.props.setField(target)
    };

    submitUserRegistrationForm = (e) => {
        e.preventDefault();
        const errors = this.validateForm();
        if (Object.keys(errors).length === 0) {
            this.props.setLoggedIn(this.fields);
        } else {
            this.props.setErrors(errors);
        }
    };

    validateForm = () => {
        let fields = this.props.fields;
        let errors = {};
        /* eslint-disable no-unused-expressions */

        !fields["login"]
            ? errors["login"] = "Пожалуйста, введите логин."
            : !fields["login"].match('^[A-Za-zА-Яа-яЁё0-9]{4,60}')
            ? errors["login"] = "Напишите правильный логин."
            : null;

        !fields["password"]
            ? errors["password"] = "Пожалуйста, введите пароль."
            : !fields["password"].match('^[A-Za-zА-Яа-яЁё]{4,60}')
            ? errors["password"] = "Пароль слишком легкий."
            : null;

        return errors;
    };

    resetForm = (e) => {
        this.props.clearForm(this.fields);
        e.preventDefault()
    };

    render() {
        const {fields, errors} = this.props;
        return (
            <div className='login-container'>
                <form className="registrationForm "
                      onSubmit={this.submitUserRegistrationForm}>
                    <h1 className="registrationForm__title">Вход</h1>
                    <LoginComponent
                        text='Логин'
                        type='text'
                        placeholder='Логин'
                        value={fields.login}
                        onChange={this.handleChange}
                        name='login'
                        form='login'
                    />
                    <div className="text-danger  errorMsg">{errors.login}</div>
                    <PasswordComponent
                        text='Пароль'
                        type='password'
                        value={fields.password}
                        onChange={this.handleChange}
                        name='password'
                        form='password'
                    />
                    <div className="text-danger  errorMsg">{errors.password}</div>
                    <div className='d-flex justify-content-between mt-3'>
                        <BtnComponents
                            text="Сброс"
                            className='btn btn-outline-danger btn_active'
                            value='reset'
                            onClick={this.resetForm}
                        />

                        <Link to='home'>
                            <BtnComponents
                                text="Вход"
                                className='btn btn-outline-success btn_active'
                                onSubmit={this.submitUserRegistrationForm}
                            />
                        </Link>

                    </div>
                </form>

                <div className='form group d-flex justify-content-center'>
                    <Link to='registration'>
                        <BtnBackHome
                            text='Я ж не зарегистрирован! Регистрация'
                            type='button'
                        />
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({...state.login});

export default connect(mapStateToProps, {
    setErrors,
    setField,
    setLoggedIn,
    clearForm,
})(LoginPageContainer);