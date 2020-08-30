// import React from 'react';
// import HeaderComponent from "../Components/HeaderComponent";
// import EmaileComponent from "../Components/EmaileComponent";
// import PasswordComponent from "../Components/PasswordComponent";
// import LoginComponent from "../Components/LoginComponent";
// import NameComponent from "../Components/NameComponent";
// import BtnComponent from "../Components/BtnComponent";
// import {Link} from "react-router-dom";
// import BtnLogin from "../Components/BtnLogin";
// import {connect} from "react-redux";
// import {setErrors, setField, setLoggedIn, clearForm} from "../redux/actions/registration";
//
// class RegistrationPageContainer extends React.Component {
//
//     public fields: any = {
//         username: '',
//         surname: '',
//         email: '',
//         login: '',
//         password: '',
//         value: '',
//     };
//
//     public props: any;
//
//     public componentDidMount() {
//         this.props.clearForm(this.fields);
//     };
//
//     private handleChange = ({target}: any) => {
//         this.props.setField(target)
//     };
//
//     public submitUserRegistrationForm = (e: any) => {
//         e.preventDefault();
//         const errors = this.validateForm();
//
//         if (Object.keys(errors).length === 0) {
//             this.props.setLoggedIn(this.fields);
//         } else {
//             this.props.setErrors(errors);
//         }
//     };
//
//     public validateForm = () => {
//         let fields = this.props.fields;
//         let errors: { [key: string]: string } = {};
//
//         if (!fields["username"] || !fields["username"].match('^[A-Za-zА-Яа-яЁё]{2,60}')) {
//             errors["username"] = "Не верно введено имя";
//         }
//
//
//         if (!fields["surname"] || !fields["surname"].match('^[A-Za-zА-Яа-яЁё]{2,60}')) {
//             errors["surname"] = "Не верно введена фамилия";
//         }
//
//         if (!fields["email"] || !fields["email"].match('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')) {
//             errors["email"] = "Не верно введён e-mail";
//         }
//
//
//         if (!fields["login"] || !fields["login"].match('^[A-Za-zА-Яа-яЁё]{2,60}')) {
//             errors["login"] = "Не верно введён логин";
//         }
//
//         if (!fields["password"] || !fields["password"].match('^[A-Za-zА-Яа-яЁё]{2,60}')) {
//             errors["password"] = "Не верно введён пароль";
//         }
//
//         return errors;
//     };
//
//     public resetForm = (e: any) => {
//         this.props.clearForm(this.fields);
//         e.preventDefault()
//     };
//
//     public render() {
//         const {fields, errors} = this.props;
//         return (
//             <div className='registration-container'>
//                 <form className="registrationForm"
//                       name="userRegistrationForm"
//                       onSubmit={this.submitUserRegistrationForm}>
//                     <HeaderComponent
//                         className="registrationForm__title"
//                         title='Регистрация'
//                     />
//                     <div className=" d-flex clm-2 justify-content-between">
//                         <div>
//                             <NameComponent
//                                 text='Имя'
//                                 type='text'
//                                 className="registrationField__input"
//                                 placeholder='Имя'
//                                 value={fields.username}
//                                 name='username'
//                                 form='username'
//                                 onChange={this.handleChange}
//                             />
//                             <div className="text-danger  errorMsg">{errors.username}</div>
//                         </div>
//                         <div>
//                             <NameComponent
//                                 className="registrationField__input"
//                                 text='Фамилия'
//                                 type='text'
//                                 placeholder='Фамилия'
//                                 value={fields.surname}
//                                 name='surname'
//                                 form='surname'
//                                 onChange={this.handleChange}
//                             />
//                             <div className="text-danger  errorMsg">{errors.surname}</div>
//                         </div>
//                     </div>
//                     <EmaileComponent
//                         text='Email'
//                         name='email'
//                         type='text'
//                         placeholder='example@email.com'
//                         value={fields.email}
//                         onChange={this.handleChange}
//                         form='email'
//                     />
//                     <div className="text-danger  errorMsg">{errors.email}</div>
//
//                     <LoginComponent
//                         text='Логин'
//                         type='text'
//                         placeholder='Логин'
//                         value={fields.login}
//                         onChange={this.handleChange}
//                         name='login'
//                         form='login'
//                     />
//                     <div className="text-danger  errorMsg">{errors.login}</div>
//                     <PasswordComponent
//                         text='Пароль'
//                         type='password'
//                         value={fields.password}
//                         onChange={this.handleChange}
//                         name='password'
//                         form='password'
//                     />
//                     <div className="text-danger  errorMsg">{errors.password}</div>
//                     <div className='d-flex justify-content-between mt-3'>
//                         <BtnComponent
//                             className='btn btn-outline-danger'
//                             text="Сброс"
//                             onClick={this.resetForm}
//
//                         />
//                         <BtnComponent
//                             className='btn btn-outline-success btn_active'
//                             text="Регистрация"
//                             onClick={this.submitUserRegistrationForm}
//                         />
//                     </div>
//                 </form>
//
//                 <div className='form group d-flex justify-content-center'>
//                     <Link to='login'>
//                         <BtnLogin
//                             text='Уже есть аккаунт? Вход'
//                             type='button'
//                         />
//                     </Link>
//                 </div>
//             </div>
//         );
//     }
// }
//
// const mapStateToProps = (state: any) => ({...state.registration});
//
// export default connect(mapStateToProps, {
//     setErrors,
//     setField,
//     setLoggedIn,
//     clearForm,
// })(RegistrationPageContainer);


import React from 'react';
import '../App.css';
import HeaderComponent from "../Components/HeaderComponent";
import EmaileComponent from "../Components/EmaileComponent";
import PasswordComponent from "../Components/PasswordComponent";
import LoginComponent from "../Components/LoginComponent";
import NameComponent from "../Components/NameComponent";
import BtnComponent from "../Components/BtnComponent";
import {Link} from "react-router-dom";
import BtnLogin from "../Components/BtnLogin";
import {connect} from "react-redux";
import {setErrors, setField, setLoggedIn, clearForm} from "../redux/actions/registration";

class RegistrationPageContainer extends React.Component {

    fields = {
        username: '',
        surname: '',
        email: '',
        login: '',
        password: '',
        value: '',
    };

    componentDidMount() {
        this.props.clearForm(this.fields);
    };

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
        !fields["username"]
            ? errors["username"] = "Пожалуйста, введите имя."
            : !fields["username"].match('^[A-Za-zА-Яа-яЁё]{2,60}')
            ? errors["username"] = "Имя может содержать только буквы."
            : null;

        !fields["surname"]
            ? errors["surname"] = "Пожалуйста, введите фамилию."
            : !fields["surname"].match('^[A-Za-zА-Яа-яЁё]{2,60}')
            ? errors["surname"] = "Фамилия может содержать только буквы."
            : null;

        !fields["email"]
            ? errors["email"] = "Пожалуйста, введите e-mail."
            : !fields["email"].match('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
            ? errors["email"] = "Напишите правильный e-mail."
            : null;

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
            <div className='registration-container'>
                <form className="registrationForm"
                      name="userRegistrationForm"
                      onSubmit={this.submitUserRegistrationForm}>
                    <HeaderComponent
                        className="registrationForm__title"
                        title='Регистрация'
                    />
                    <div className=" d-flex clm-2 justify-content-between">
                        <div>
                            <NameComponent
                                text='Имя'
                                type='text'
                                className="registrationField__input"
                                placeholder='Имя'
                                value={fields.username}
                                name='username'
                                form='username'
                                onChange={this.handleChange}
                            />
                            <div className="text-danger  errorMsg">{errors.username}</div>
                        </div>
                        <div>
                            <NameComponent
                                className="registrationField__input"
                                text='Фамилия'
                                type='text'
                                placeholder='Фамилия'
                                value={fields.surname}
                                name='surname'
                                form='surname'
                                onChange={this.handleChange}
                            />
                            <div className="text-danger  errorMsg">{errors.surname}</div>
                        </div>
                    </div>
                    <EmaileComponent
                        text='Email'
                        name='email'
                        type='text'
                        placeholder='example@email.com'
                        value={fields.email}
                        onChange={this.handleChange}
                        form='email'
                    />
                    <div className="text-danger  errorMsg">{errors.email}</div>

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
                        <BtnComponent
                            className='btn btn-outline-danger'
                            text="Сброс"
                            onClick={this.resetForm}

                        />
                        <BtnComponent
                            className='btn btn-outline-success btn_active'
                            text="Регистрация"
                            onSubmit={this.submitUserRegistrationForm}
                        />
                    </div>
                </form>

                <div className='form group d-flex justify-content-center'>
                    <Link to='login'>
                        <BtnLogin
                            text='Уже есть аккаунт? Вход'
                            type='button'
                        />
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({...state.registration});

export default connect(mapStateToProps, {
    setErrors,
    setField,
    setLoggedIn,
    clearForm,
})(RegistrationPageContainer);
