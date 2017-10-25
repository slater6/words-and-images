import React from 'react'
import {
    Form, 
    TextInput, 
    Button
} from '../../styles/header'

const LoginForm = (props) => (
    <Form onSubmit={props.handleSubmit}>
        <TextInput 
            onChange={props.handleInput} 
            name="username" 
            value={props.username} 
            placeholder="Admin username..."
        />
        <TextInput 
            onChange={props.handleInput} 
            name="password" type="password"   
            value={props.password} 
            placeholder="Admin password..."
        />
        <Button>Login</Button>
    </Form>
)

export default LoginForm