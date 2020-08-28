import * as React from 'react';
import TableComponent from "../Components/HomePageComponents/TableComponent";
import {BtnProfile} from "../Components/HomePageComponents/BtnProfile";
import BtnBurger from "../Components/HomePageComponents/BtnBurger";
import {addUsersData, editUser} from "../redux/actions/row";
import {connect} from "react-redux";
import {usersRawSelector} from "../selectors/userSelector";

const HomePageContainer = () => {
        return (
            <div className='containerWhite home-page-container scroll'>
                    <BtnBurger/>
                    <BtnProfile/>
                    <div className='container shadow p-3 mb-5 bg-white rounded'>
                        <TableComponent/>
                    </div>
            </div>
        );
}

const mapStateToProps = (state: any) => {

    return {
        users: usersRawSelector(state),
    };
};

export default connect(mapStateToProps, {addUsersData, editUser})(HomePageContainer)
