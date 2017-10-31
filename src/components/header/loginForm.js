import React,{Component} from 'react'
import {connect} from 'react-redux'
import {
    updateLoginCredentials,
    loginAdmin,
    focusInputs,
    blurInputs
} from '../../actions'

import {
    Navbar,
    FormGroup,
    FormControl,
    Button
} from 'react-bootstrap'



class LoginForm extends Component{

    handleInput = (e) => {
        const inputName = e.target.name
        const value = e.target.value
        this.props.updateLoginCredentials(inputName,value)
    }

    handleFocus = (e) => {
        this.props.focusInputs();
        
    }

    handleBlur = (e) => {
        this.props.blurInputs();
        
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.loginAdmin(this.props.auth.username,this.props.auth.password)
    }

    render(){
        return(
            <Navbar.Form pullRight>
                <FormGroup>
                    <FormControl 
                        type="text" 
                        name="username"  
                        placeholder="Admin username..."
                        onChange={this.handleInput} 
                        value={this.props.auth.username}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                    />
        
                    <FormControl 
                        type="password" 
                        name="password"  
                        placeholder="Admin password..."
                        onChange={this.handleInput} 
                        value={this.props.auth.password}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur} 
                    />
                </FormGroup>
            
                <Button type="submit" onClick={this.handleSubmit}>Login</Button>
            </Navbar.Form>
        )
    }
}   


export default connect(
    (state) => ({
      auth:state.auth
    }),
    {
        focusInputs,
        blurInputs,
        loginAdmin,
        updateLoginCredentials
    }
  )(LoginForm)