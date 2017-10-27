import styled, {css,keyframes} from 'styled-components'

export const WordHeader = styled.header`
    display: flex;
    justify-content: center;
    position:relative;
    z-index:12;
`

export const WordDisplayer = styled.h1`
    flex:2 1 80%;
    text-align:center;
`

const activeLetter = keyframes`
    0% {
        font-size:6em;
        transform:rotate(-10deg);
        color:blue;
    }

    50% {
        font-size:6.7em;
    }

    100% {
        font-size:6em;
        transform:rotate(10deg);
    }
`;

export const Highlighter = styled.span`
    color:rgb(143, 138, 138);
    font-size: 6em;
    display:inline-block;

    ${props => props.highlight && css`
        color:red;
    `}

    ${props => props.active && css`
        color:red;
        animation: ${activeLetter} 200ms ease;
    `}

    ${props => props.completed && css`
        color:#555;
        opacity:.9;
        text-shadow:1px 1px 1px #EEE;
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
