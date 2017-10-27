import React from 'react'
import {
    Navbar,
    Button
} from 'react-bootstrap'


const LogoutForm = (props) => (
    <Navbar.Form pullRight>
        <Button type="submit" onClick={props.handleSubmit}>Logout</Button>
    </Navbar.Form>
)

export default LogoutForm