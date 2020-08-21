import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePageContainer from "./Containers/HomePageContainer";
import RegistrationPageContainer from "./Containers/RegistrationPageContainer";
import LoginPageContainer from "./Containers/LoginPageContainer";
import EditUsersRowContainer from "./Containers/EditUserRowContainer";

class App extends React.Component {
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

export default App;