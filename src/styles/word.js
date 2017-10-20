import styled, {css} from 'styled-components'

export const Header = styled.header`
    display: flex;
    justify-content: center;
`

export const WordDisplayer = styled.h1`
    flex:2 1 80%;
    text-align:center;
`

export const Highlighter = styled.span`
    color:rgb(143, 138, 138);
    font-size: 6em;

    ${props => props.highlight && css`
        color:red;
    `}
`

export const ImageIndicator = styled.img.attrs({
    display: props => (!props.isVisible) ? 'none' : 'inline'
})`
    display: ${props => props.display};
    margin:0 auto;
    width: 5%;
    height:auto;
`

export const Button = styled.button`
    flex:1;
    height:50px;
    color:white;
    border:none;
    border-radius: 5px;
    font-size: 1.2rem; 
    color: white;
    width:100%;
    padding: 10px;
    font-weight:bold;

    ${props => props.primary && css`
        background: green;
    `}

    ${props => props.danger && css`
        background: red;
        
    `}
`
