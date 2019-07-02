import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom'
import '../css/admin.css';
import $ from "jquery";


const styles = {
    style1: {
        fontFamily: 'Lucida Sans Unicode',
        color: '#636e72'
    },
    style2: {
        fontFamily: 'Lucida Console',
        color: '#636e72'
    },
    showColor: {
        'color': '#007bff',
    }
};


export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = (target.type === 'checkbox') ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        if (!this.validateEmail(this.state.email)) {
            $('#email').removeClass("is-valid");
            $('#email').addClass("is-invalid")
        } else {
            $('#email').removeClass("is-invalid");
            $('#email').addClass("is-valid")
        }
    };


    renderRedirect = (path) => {
        return <Redirect to={`${path}`}/>
    };


    validateUser = (event) => {
        event.preventDefault();
        if (this.state.email.trim() && this.state.password.trim()) {

            if (this.validateEmail(this.state.email.trim())) {
                this.props.loginUser(this.state.email, this.state.password);
            } else {
                $('#email').addClass("is-invalid")
            }
        } else {
            $("#errorBlockText")
                .html(
                    `<strong>Error! </strong> Empty Input Provided.`
                );
            $("#errorBlock").show()
        }
    };

    validateEmail = (email) => {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    hideErrorNoti = () => {
        $('#errorBlock').hide()
    };

    componentDidMount() {

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $('#my-arrow').toggleClass('fa-arrow-right fa-arrow-left');
        });

        $('#errorBlock').hide()
    }





    render() {
        return (
            <div className="wrapper">

                {/*sidebar*/}
                {/*<Sidebar/>*/}

                {/*main content*/}
                <div id="content">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">

                            {/*<button type="button" id="sidebarCollapse" className="btn">*/}
                            {/*    <i className="fas fa-arrow-left" id="my-arrow"></i>*/}
                            {/*    <span></span>*/}
                            {/*</button>*/}
                            <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button"
                                    data-toggle="collapse" data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <i className="fas fa-align-justify"></i>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <div className="col-lg-12 text-center ">
                                    <header style={{
                                        textAlign: "center",
                                        fontSize: "35px",
                                        fontColor: "black",
                                        fontFamily: "Lucida Console",
                                        color: "#636e72"
                                    }}>
                                        <h1>Adwenan Land Commission System</h1>
                                    </header>
                                </div>


                            </div>
                        </div>
                    </nav>

                    <div className="container">

                        <div className="alert alert-danger alert-dismissible fade show" role="alert" id="errorBlock">
                            <div id="errorBlockText"></div>
                            <button type="button" className="close" onClick={this.hideErrorNoti}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="login_wrapper col-md-4 ml-auto mr-auto">
                            <section className="login_content ">
                                <div className="shadow-lg p-3 mb-5 bg-white rounded" id="login-form">

                                    <form onSubmit={this.validateUser}>
                                        <header>
                                            <h4 style={this.style2}>Login</h4>
                                        </header>
                                        <br/>

                                        <div>
                                            <label htmlFor="Email">Email</label>
                                            <input type="text" name="email" id="email" className="form-control"
                                                   placeholder="example@gh.gov"
                                                   value={this.state.email}
                                                   onChange={this.handleInputChange} required autoFocus/>
                                            <div className="invalid-feedback">
                                                Please enter a valid email.
                                            </div>
                                            <div className="valid-feedback">
                                                Valid email entered.
                                            </div>
                                        </div>
                                        <br/>
                                        <div>
                                            <label htmlFor="Passsword">Password</label>
                                            <input type="password" name="password" id="passwordinput"
                                                   className="form-control"
                                                   placeholder="*************"
                                                   value={this.state.password}
                                                   onChange={this.handleInputChange} required/>
                                        </div>
                                        <br/>
                                        <div>
                                            <div>
                                                <button className="btn btn-outline-success" type="submit"
                                                        value="Submit">Login
                                                </button>
                                            </div>
                                        </div>

                                        <div className="clearfix"></div>
                                        <br/>

                                        <div className="separator">
                                            <div className="change_link">New to this site? <Link to={'/register'}
                                                                                                 style={styles.showColor}> Create
                                                Account </Link></div>
                                            <div className="change_link">Forgot password? <Link
                                                to={'/forgot-password-email'}
                                                style={styles.showColor}> Reset
                                                Password </Link></div>
                                            <div className="clearfix"></div>
                                            <br/>
                                        </div>
                                    </form>
                                </div>
                            </section>
                        </div>


                    </div>
                </div>

            </div>
        )
    }
}






