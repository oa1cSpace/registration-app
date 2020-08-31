import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePageContainer from "./Containers/HomePageContainer";
import RegistrationPageContainer from "./Containers/RegistrationPageContainer";
import LoginPageContainer from "./Containers/LoginPageContainer";
import EditUsersRowContainer from "./Containers/EditUserRowContainer";
import {connect} from "react-redux";
import {addUsersData} from "./redux/actions/rowAction";
import {generateData} from "./helpers/users";

const App: React.FC <any> = ({addUsersData}) => {
    addUsersData(generateData(100));

    return (
        <Router>
            <Switch>
                <Route exact path="/registration" component={RegistrationPageContainer}/>
                <Route exact path="/login" component={LoginPageContainer}/>
                <Route exact path="/home" component={HomePageContainer}/>
                <Route exact path="/users/:id" component={EditUsersRowContainer}/>
                <Route exact path="/users" component={EditUsersRowContainer}/>
            </Switch>
        </Router>
    );
}

export default connect(null, {addUsersData})(App);
