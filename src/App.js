import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePageContainer from "./Containers/HomePageContainer";
import RegistrationPageContainer from "./Containers/RegistrationPageContainer";
import LoginPageContainer from "./Containers/LoginPageContainer";
import EditUsersRowContainer from "./Containers/EditUserRowContainer";
import {connect} from "react-redux";
import {addUsersData} from "./redux/actions/row";
import {generateData} from "./helpers/users";


class App extends React.Component {

    constructor (props) {
        super(props);
        this.props.addUsersData(
            generateData(100)
        );
    };

    render() {
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
}

export default connect(null, { addUsersData })(App)
