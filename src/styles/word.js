import styled, {css} from 'styled-components'

export const Header = styled.header`
    display: flex;
    justify-content: center;
`

export const WordDisplayer = styled.h1`
`

export const Highlighter = styled.span`
    color:rgb(143, 138, 138);
    font-size: 6em;

    ${props => props.highlight && css`
        color:red;
    `}
`

export const Button = styled.button`
    width:50px;
    height: 30px;
    background-color:red;
    color:white;
    border:none;
    border-radius: 5px;
    font-size: 1.rem;
    
`
