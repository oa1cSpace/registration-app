import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {addUsersData, editUser} from "../redux/actions/row";
import {generateId} from "../Functions/RandomFunctions";
import {usersRawSelector} from "../selectors/userSelector";

const EditUserRowContainer = ({users, match, editUser}) => {

    const [row, setRow] = useState({
            id: '',
            name1: '',
            name2: '',
            name3: '',
            email: '',
        }
    );

    const [rowId, setRowId] = useState(null);

    const [errors, setErrors] = useState('');

    useEffect(() => {
        const fields = users;
        const {id} = match.params;

        if (id) {
            setRow(fields[id]);
            setRowId(parseInt(id));
        }

    }, []);

    const handleChange = (event) => {
        const {target} = event;
        setRow({...row, [target.name]: target.value}
        )
    };

    const handleSave = () => {
        const errors = validate();

        if (Object.keys(errors).length === 0) {

            if (rowId === null) {
                row.id = generateId();
            }
            const oldRows = users;
            const newRows = rowId === null
                ? [row, ...oldRows] // when adding a new user
                : oldRows.map((oldRow, index) => index === rowId ? row : oldRow); // when editing existing user
            editUser(newRows);
            window.history.back();
        } else {
            setErrors(errors);
        }
    };

    const validate = () => {
        let rows = row;
        let errors = {};

        const editNames = new RegExp("^[A-Za-zА-Яа-яЁё]{2,60}");
        const editEmail = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')

        if (!editNames.exec(rows.name1)) {
            errors.name1 = "Введите правильный логин.";
        }

        if (!editNames.exec(rows.name2)) {
            errors.name2 = "Введите правильное имя.";
        }

        if (!editNames.exec(rows.name3)) {
            errors.name3 = "Введите правильную фамилию.";
        }

        if (!editEmail.exec(rows.email)) {
            errors.email = "Введите правильный e-mail.";
        }

        return errors
    };

    return (
        <div className='containerWhite'>
            <div>
                <h2 className='registrationForm__title mt-5'>Редактирование данных пользователя</h2>
            </div>

            {/*  ===> EDIT_FORM <===  */}
            <form className="container-sm mt-5 shadow p-3 mb-5 bg-white rounded width_15"
                /*onSubmit={submitEdit}*/>
                {/*  <table className="table table-hover" id='table-edit'>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Логин</th>
                                <th scope="col">Имя</th>
                                <th scope="col">Фамилия</th>
                                <th scope="col">E-mail</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    {this.state.row.id}
                                </td>
                                {['name1', 'name2', 'name3', 'email'].map((name) =>
                                    <td key={name}>
                                        <input name={name} onChange={this.handleChange} value={this.state.row[name]}/>
                                    </td>
                                )}
                            </tr>
                        </tbody>
                    </table>*/}


                {/*  ===> FIELD_ID <===  */}
                <fieldset className="fieldset border">
                    <legend className="registrationField__legend ml-2">ID</legend>
                    <td>
                        <input
                            className="registrationField__input"
                            value={row.id}
                        />
                    </td>
                </fieldset>

                {/*  ===> FIELD_LOGIN <===  */}
                <fieldset className="fieldset border">
                    <legend className="registrationField__legend ml-2">Логин</legend>
                    {/*{['name1'].map((name) =>*/}
                    {/*    <td key={name}>*/}
                    {/*        <input*/}
                    {/*            className="registrationField__input"*/}
                    {/*            name={name}*/}
                    {/*            onChange={this.handleChange}*/}
                    {/*            value={this.state.row[name]}*/}
                    {/*        />*/}
                    {/*    </td>)}*/}
                    <td>
                        <input
                            name='name1'
                            className="registrationField__input"
                            onChange={handleChange}
                            value={row.name1}
                        />
                    </td>
                </fieldset>
                <div className="text-danger">{errors.name1}</div>

                {/*  ===> FIELD_NAME <===  */}
                <fieldset className="fieldset border">
                    <legend className="registrationField__legend ml-2">Имя</legend>
                    <td>
                        <input
                            name='name2'
                            className="registrationField__input"
                            onChange={handleChange}
                            value={row.name2}
                        />
                    </td>
                </fieldset>
                <div className="text-danger">{errors.name2}</div>

                {/*  ===> FIELD_SURNAME <===  */}
                <fieldset className="fieldset border">
                    <legend className="registrationField__legend ml-2">Фамилия</legend>
                    <td>
                        <input
                            name='name3'
                            className="registrationField__input"
                            onChange={handleChange}
                            value={row.name3}
                        />
                    </td>
                </fieldset>
                <div className="text-danger">{errors.name3}</div>

                {/*  ===> FIELD_E-MAIL <===  */}
                <fieldset className="fieldset border">
                    <legend className="registrationField__legend ml-2">E-mail</legend>
                    <td>
                        <input
                            className="registrationField__input"
                            name='email'
                            onChange={handleChange}
                            value={row.email}
                        />
                    </td>
                </fieldset>
                <div className="text-danger">{errors.email}</div>

                <div className='d-flex justify-content-between mt-3'>
                    {/*  ===> BACK_BTN <===  */}
                    <div>
                        <button
                            className='btn btn-outline-primary'
                            type='button'
                            onClick={() => window.history.back()}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16"
                                 className="bi bi-arrow-left-short mr-2"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M7.854 4.646a.5.5 0 0 1 0 .708L5.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
                                <path fillRule="evenodd"
                                      d="M4.5 8a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                            Назад
                        </button>
                    </div>

                    {/*  ===> SAVE_BTN <===  */}
                    <div>
                        <button
                            className='btn btn-outline-success'
                            type='button'
                            onClick={() => handleSave()}>Сохранить
                            <svg width="1em" height="1em" viewBox="0 0 16 16"
                                 className="bi bi-file-earmark-plus ml-2"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h5v-1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5v2.5A1.5 1.5 0 0 0 10.5 6H13v2h1V6L9 1z"/>
                                <path fillRule="evenodd"
                                      d="M13.5 10a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/>
                                <path fillRule="evenodd"
                                      d="M13 12.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z"/>
                            </svg>
                        </button>
                    </div>

                </div>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        users: usersRawSelector(state),
    }
};

export default connect(mapStateToProps, {
    addUsersData,
    editUser
})(EditUserRowContainer);
