import React from 'react';
import RowComponent from "./RowComponent";
import PaginationComponent from "./PaginationComponent";
import {connect} from "react-redux";
import {
    updateFilteredRows,
    updatePage,
    addTextInInput,
    addUsersData
} from "../../redux/actions/row";
import {NavLink} from "react-router-dom";
import {
    currentPageSelector,
    filterTextSelector,
    getPagesCount,
    usersPerPageSelector,
    usersRawSelector,
} from "../../selectors/userSelector";


class TableComponent extends React.Component {


    setPage = (number) => {
        this.props.updatePage(number);
    };


    searchFieldChanged = (event) => {
        const {value: searchPhrase} = event.target;
        this.props.addTextInInput(searchPhrase);
    };


    render() {
        const {result} = this.props;
        return (
            <div>
                <div className='d-flex justify-content-between align-middle'>
                    {/*  === FILTER_FIELD ===  */}
                            <input className="form-control border mt-2"
                                   id="myInput"
                                   type="text"
                                   placeholder="Отфильтровать..."
                                   onKeyUp={this.searchFieldChanged}/>


                    {/*  === ADD_NEW_USER_BTN ===  */}
                    <div className='ml-3'>
                        <button type="button" className="btn mb-2">
                            <NavLink to={`/users/`} className='btn rounded'>
                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-person-plus"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M11 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM1.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm4.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                                    <path fillRule="evenodd"
                                          d="M13 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z"/>
                                </svg>
                            </NavLink>
                        </button>
                    </div>
                </div>

                {/*  === TABLE ===  */}
                <div>
                    <table className="table table-hover">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Логин</th>
                            <th scope="col">Имя</th>
                            <th scope="col">Фамилия</th>
                            <th scope="col">E-mail</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        {/*  === TABLE_BODY ===  */}
                        <tbody>
                        {
                            Object.values(result)
                                .map((row, index) => <RowComponent key={index} row={row} index={index}/>)
                        }
                        </tbody>
                    </table>
                </div>


                {/*  === PAGINATION ===  */}
                <div>
                    <nav aria-label="Page Navigation">
                        <PaginationComponent
                            setPage={this.setPage}
                            pagesCount={this.props.pageCount}
                            currentPage={this.props.currentPage}
                        />
                    </nav>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: usersRawSelector(state),
        filter: filterTextSelector(state),
        result: usersPerPageSelector(state),
        pageCount: getPagesCount(state),
        currentPage: currentPageSelector(state),
    };
};

export default connect(
    mapStateToProps, {
        updateFilteredRows,
        updatePage,
        addUsersData,
        addTextInInput,
    }
)(TableComponent);