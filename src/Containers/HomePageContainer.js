import React from 'react';
import TableComponent from "../Components/HomePageComponents/TableComponent";
import BtnProfile from "../Components/HomePageComponents/BtnProfile";
import BtnBurger from "../Components/HomePageComponents/BtnBurger";
import {generateData} from "../redux/actions/row";
import {connect} from "react-redux";

class HomePageContainer extends React.Component {
    render() {
        return (
            <div className='containerWhite home-page-container scroll'>
                <BtnBurger/>
                <BtnProfile/>
                <div className='container-sm shadow p-3 mb-5 bg-white rounded'>
                    <TableComponent data={this.props.generateUserRow}/>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => {

    return {
        ...state.rows,
    };
};

export default connect(mapStateToProps, {generateData})(HomePageContainer);
