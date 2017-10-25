import React from 'react'
import {
    Form, 
    Button
} from '../../styles/header'

const LogoutForm = (props) => (
    <Form onSubmit={props.handleSubmit}>
        <Button>Logout</Button>
    </Form>
)

export default LogoutForm