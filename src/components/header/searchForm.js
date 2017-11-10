import React,{Component} from 'react'
import {connect} from 'react-redux'
import {
    Navbar,
    FormGroup,
    FormControl,
    Button
} from 'react-bootstrap'

import {
    updateSearchWord,
    searchWord,
    focusInputs,
    blurInputs
} from '../../actions'


class SearchForm extends Component{


    handleSearchInput = (e) => {
        this.props.updateSearchWord(e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.searchWord()
        this.props.updateSearchWord('')
    }

    handleFocus = (e) => {
        this.props.focusInputs();
        
    }

    handleBlur = (e) => {
        this.props.blurInputs();
        
    }

    render(){
        return(
            <Navbar.Form pullLeft>
                <FormGroup>
                    <FormControl 
                        type="text" 
                        placeholder="Search" 
                        onChange={this.handleSearchInput} 
                        value={this.props.word.searchWord}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                    />
                </FormGroup>
                {' '}
                <Button type="submit"  onClick={this.handleSubmit}>Search</Button>
            </Navbar.Form>
        )
    }
} 
   

export default connect(
    (state) => ({
        word : state.word
    }),
    {
        updateSearchWord,
        searchWord,
        focusInputs,
        blurInputs
    }
  )(SearchForm)