import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'


export default class Logout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: "",
            user: "",
        }

    }


    renderRedirect = (path) => {
        return <Redirect to={`/${path}`}/>
    };


    handleRouting = () => {
        this.props.logoutUser();
        this.renderRedirect("")
    };

    componentDidMount() {

        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            console.log(AppState);
            this.setState({isLoggedIn: AppState.isLoggedIn, user: AppState.user});
        }

    }

    render() {

        return (
            <>
                {this.handleRouting()}
            </>
        )
    }


}





