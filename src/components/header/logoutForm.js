import React,{Component} from 'react'
import {connect} from 'react-redux'
import {
    Navbar,
    Button
} from 'react-bootstrap'

import {
    logoutAdmin
} from '../../actions'


class LogoutForm extends Component{
    render(){
        return(
            <Navbar.Form pullRight>
            <Button type="submit" onClick={this.props.logoutAdmin}>Logout</Button>
        </Navbar.Form>
        )
    }
} 
   

export default connect(
    (state) => ({
        auth:state.auth
    }),
    {
       logoutAdmin,
    }
  )(LogoutForm)