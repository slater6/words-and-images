import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
    Navbar,
    Nav
} from 'react-bootstrap'

import {
    checkAuthStatus
} from '../../actions'
import LoginForm from './loginForm'
import LogoutForm from './logoutForm'


class Header extends Component{

    componentDidMount = () => {
        this.props.checkAuthStatus()
    }

    render() {
            let  handleAuthState = <LoginForm/>

            if(this.props.auth.isAuth){
                handleAuthState = <LogoutForm/>
            }
        
        return (
            <Navbar style={{zIndex:'11'}}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">James Games</a>
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
       checkAuthStatus
    }
  )(Header)