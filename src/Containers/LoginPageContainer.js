// import * as React from 'react';
// import {Link} from "react-router-dom";
// import LoginComponent from "../Components/LoginComponent";
// import PasswordComponent from "../Components/PasswordComponent";
// import BtnBackHome from "../Components/BtnBackHome";
// import BtnComponent from "../Components/BtnComponent";
// import {connect} from "react-redux";
// import {clearForm, setErrors, setField, setLoggedIn} from "../redux/actions/login";
//
// class LoginPageContainer extends React.Component {
//
//     props: any;
//
//     fields: any = {
//         login: '',
//         password: '',
//     };
//
//     componentDidMount() {
//         this.props.clearForm(this.fields);
//     }
//
//     handleChange = ({target}: any) => {
//         this.props.setField(target)
//     };
//
//     submitUserRegistrationForm = (e: any): void => {
//         e.preventDefault();
//         const errors = this.validateForm();
//         if (Object.keys(errors).length === 0) {
//             this.props.setLoggedIn(this.fields);
//         } else {
//             this.props.setErrors(errors);
//         }
//     };
//
//     validateForm = () => {
//         let fields = this.props.fields;
//         let errors: any = {};
//
//
//         !fields["login"]
//             ? errors["login"] = "Пожалуйста, введите логин."
//             : !fields["login"].match('^[A-Za-zА-Яа-яЁё0-9]{4,60}')
//             ? errors["login"] = "Напишите правильный логин."
//             : null;
//
//         !fields["password"]
//             ? errors["password"] = "Пожалуйста, введите пароль."
//             : !fields["password"].match('^[A-Za-zА-Яа-яЁё]{4,60}')
//             ? errors["password"] = "Пароль слишком легкий."
//             : null;
//
//         return errors;
//     };
//
//     resetForm = (e: any) => {
//         this.props.clearForm(this.fields);
//         e.preventDefault()
//     };
//
//     render() {
//         const {fields, errors} = this.props;
//         return (
//             <div className='login-container'>
//                 <form className="registrationForm"
//                       onSubmit={this.submitUserRegistrationForm}>
//
//                     <h1 className="registrationForm__title">Вход</h1>
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
//
//                     <PasswordComponent
//                         text='Пароль'
//                         type='password'
//                         value={fields.password}
//                         onChange={this.handleChange}
//                         name='password'
//                         form='password'
//                     />
//                     <div className="text-danger  errorMsg">{errors.password}</div>
//
//                     <div className='d-flex justify-content-between mt-3'>
//                         <BtnComponent
//                             text="Сброс"
//                             className='btn btn-outline-danger btn_active'
//                             value='reset'
//                             onClick={this.resetForm}
//                         />
//
//                         <Link to='home'>
//                             <BtnComponent
//                                 text="Вход"
//                                 className='btn btn-outline-success btn_active'
//                                 onSubmit={this.submitUserRegistrationForm}
//                             />
//                         </Link>
//
//                     </div>
//                 </form>
//
//                 <div className='form group d-flex justify-content-center'>
//                     <Link to='registration'>
//                         <BtnBackHome
//                             text='Я ж не зарегистрирован! Регистрация'
//                             type='button'
//                         />
//                     </Link>
//                 </div>
//             </div>
//         );
//     }
// }
//
// const mapStateToProps = (state: any) => ({...state.login});
//
// export default connect(mapStateToProps, {
//     setErrors,
//     setField,
//     setLoggedIn,
//     clearForm,
// })(LoginPageContainer);


// import * as React from 'react';
// import {Link} from "react-router-dom";
// import LoginComponent from "../Components/LoginComponent";
// import PasswordComponent from "../Components/PasswordComponent";
// import BtnBackHome from "../Components/BtnBackHome";
// import BtnComponent from "../Components/BtnComponent";
// import {connect} from "react-redux";
// import {clearForm, setErrors, setField, setLoggedIn} from "../redux/actions/login";
//
//
// class LoginPageContainer extends React.Component {
//
//     // props: IInputs;
//
//     fields: any = {
//         login: "",
//         password: ""
//     };
//
//     errors: Array<any> = [];
//
//     componentDidMount() {
//         this.props.clearForm(this.fields);
//     };
//
//     handleChange = ({target}: any) => {
//         this.props.setField(target)
//     };
//
//     submitRegistrationForm = (e: any): void => {
//         e.preventDefault();
//
//         const errors = this.validate();
//
//         if (!errors.length) {
//             let fields = {
//                 login: '',
//                 password: '',
//             };
//             this.props.setLoggedIn(fields);
//         } else {
//             this.props.setErrors(errors);
//         }
//     };
//
//     getError = (name: string): string => {
//         const error = this.errors.find((item: any) => item.name === name);
//         return error ? error.description : '';
//     };
//
//     validate = () => {
//
//         this.errors = [];
//         const fields = this.props.fields;
//
//         const reLogin = new RegExp("^[A-Za-zА-Яа-яЁё]{4,60}");
//
//         if (!reLogin.exec(fields.login)) {
//             this.errors.push({
//                 name: 'login',
//                 description: 'Логин может быть от 4 до 60 букв. Символы и цифры запрещены.',
//             });
//         }
//
//         if (fields.password.length < 6) {
//             this.errors.push({
//                 name: 'password',
//                 description: 'Слишком короткий пароль. Пароль должен быть от 6 символов',
//             });
//         }
//
//         return this.errors
//     };
//
//     resetForm = (e: any) => {
//         this.props.clearForm(this.fields);
//         e.preventDefault()
//     };
//
//
//     render() {
//
//         const {fields} = this.props;
//
//         return (
//             <div className='login-container'>
//                 <form className="registrationForm "
//                       onSubmit={this.submitRegistrationForm}>
//
//                     <h1 className="registrationForm__title">Вход</h1>
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
//                     <div className="text-danger">{this.getError("login")}</div>
//
//                     <PasswordComponent
//                         text='Пароль'
//                         type='password'
//                         value={fields.password}
//                         onChange={this.handleChange}
//                         name='password'
//                         form='password'
//                     />
//                     <div className="text-danger">{this.getError("password")}</div>
//
//                     <div className='d-flex justify-content-between mt-3'>
//                         <BtnComponent
//                             text="Сброс"
//                             className='btn btn-outline-danger btn_active'
//                             value='reset'
//                             onClick={this.resetForm}
//                         />
//
//                         <Link to='home'>
//                             <BtnComponent
//                                 text="Вход"
//                                 className='btn btn-outline-success btn_active'
//                                 onSubmit={this.submitRegistrationForm}
//                             />
//                         </Link>
//
//                     </div>
//                 </form>
//
//                 <div className='form group d-flex justify-content-center'>
//                     <Link to='registration'>
//                         <BtnBackHome
//                             text='Я ж не зарегистрирован! Регистрация'
//                             type='button'
//                         />
//                     </Link>
//                 </div>
//             </div>
//
//         );
//     }
// }
//
// const mapStateToProps = (state: any) => ({
//     ...state.registration
// });
//
// export default connect(mapStateToProps, {
//     setErrors,
//     setField,
//     setLoggedIn,
//     clearForm
// })(LoginPageContainer);






import React from 'react';
import {Link} from "react-router-dom";
import LoginComponent from "../Components/LoginComponent";
import PasswordComponent from "../Components/PasswordComponent";
import BtnBackHome from "../Components/BtnBackHome";
import BtnComponent from "../Components/BtnComponent";
import {connect} from "react-redux";
import {clearForm, setErrors, setField, setLoggedIn} from "../redux/actions/loginAction";

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

    validateForm = () =>   {
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
                        <BtnComponent
                            text="Сброс"
                            className='btn btn-outline-danger btn_active'
                            value='reset'
                            onClick={this.resetForm}
                        />

                        <Link to='home'>
                            <BtnComponent
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