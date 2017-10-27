import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
    Navbar,
    Nav
} from 'react-bootstrap'

import {
    checkAuthStatus,
    updateLoginCredentials,
    loginAdmin,
    logoutAdmin
} from '../../actions'
import LoginForm from './loginForm'
import LogoutForm from './logoutForm'


class Header extends Component{

    componentDidMount = () => {
        this.props.checkAuthStatus()
    }

    handleInput = (e) => {
        const inputName = e.target.name
        const value = e.target.value
        this.props.updateLoginCredentials(inputName,value)
    }

    handleLoginSubmit = (e) => {
        e.preventDefault()
        console.log('Login')
        this.props.loginAdmin(this.props.auth.username,this.props.auth.password)
    }

    handleLogoutSubmit = (e) => {
        e.preventDefault()
        this.props.logoutAdmin()
    }

    

    render() {
            let  handleAuthState = <LoginForm 
                handleSubmit={this.handleLoginSubmit}
                handleInput={this.handleInput}
                username={this.props.auth.username}
                password={this.props.auth.password}
            />

            if(this.props.auth.isAuth){
                handleAuthState = <LogoutForm  handleSubmit={this.handleLogoutSubmit}/>
            }
        
        return (
            <Navbar style={{zIndex:'11'}}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">James Games</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <Navbar.Collapse>
                        {handleAuthState}
                    </Navbar.Collapse>
                </Nav>
            </Navbar>
        )
    }
}

export default connect(
    (state) => ({
      auth:state.auth
    }),
    {
       updateLoginCredentials,
       loginAdmin,
       logoutAdmin,
       checkAuthStatus
    }
  )(Header)