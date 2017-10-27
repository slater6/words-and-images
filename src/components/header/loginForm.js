import React from 'react'
import {
    Navbar,
    FormGroup,
    FormControl,
    Button
} from 'react-bootstrap'


const LoginForm = (props) => (
    <Navbar.Form pullRight>
        <FormGroup>
            <FormControl 
                type="text" 
                name="username"  
                placeholder="Admin username..."
                onChange={props.handleInput} 
                value={props.username} 
            />

            <FormControl 
                type="password" 
                name="password"  
                placeholder="Admin password..."
                onChange={props.handleInput} 
                value={props.password} 
            />
        </FormGroup>
    
        <Button type="submit" onClick={props.handleSubmit}>Login</Button>
    </Navbar.Form>
)

export default LoginForm