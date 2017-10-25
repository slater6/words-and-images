import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Menu} from '../../styles/header'

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
            <Menu>
                {handleAuthState}
            </Menu>
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