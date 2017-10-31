import React,{Component} from 'react'
import {connect} from 'react-redux'
import {
    Navbar,
    Button
} from 'react-bootstrap'

import {
    logoutAdmin,
    deleteWord,
    saveImage
} from '../../actions'


class LogoutForm extends Component{

    constructor(props){
        super(props)
        
        this.btnSave = null
    }

    componentWillReceiveProps = (props) => {
        
        if(props.image.image === undefined || props.image.image.length === 0){
            this.btnSave = null;
            return;
        }

        this.btnSave = <Button bsStyle="success" onClick={this.handleSave}>Save Image</Button>
        
    }

    handleDelete = () => {
        this.props.deleteWord(this.props.word.id)
    }

    handleSave = () => {
        this.props.saveImage(this.props.word.id,this.props.image.image.id)
    }

    render(){
        return(
            <Navbar.Form pullRight>
                {this.btnSave}
                <Button bsStyle="danger" onClick={this.handleDelete}>Delete Word</Button>
                <Button type="submit" onClick={this.props.logoutAdmin}>Logout</Button>
            </Navbar.Form>
        )
    }
} 
   

export default connect(
    (state) => ({
        auth:state.auth,
        word:state.word,
        image:state.image
    }),
    {
       logoutAdmin,
       deleteWord,
       saveImage
    }
  )(LogoutForm)