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
