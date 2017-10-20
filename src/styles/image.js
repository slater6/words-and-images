import styled from 'styled-components'

export const ImageWrapper = styled.section.attrs({
    display: props => (props.isVisible.length === 0) ? 'none' : 'flex'
})`
    display: ${props => props.display};
    justify-content: center;
`

export const ImageColumn = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
`


export const ImageDisplayer = styled.img`
    border: 3px solid black;
    margin-bottom: 20px;
`
