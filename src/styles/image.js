import styled,{keyframes} from 'styled-components'

export const ImageWrapper = styled.section.attrs({
    display: props => (props.isVisible.length === 0) ? 'none' : 'flex'
})`
    display: ${props => props.display};
    justify-content: center;
    position:absolute;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    max-width:100%;
    z-index:10;
`

export const ImageColumn = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const activeImage = keyframes`
    0% {
        transform:opacity(0);
    }


    100% {
        transform:opacity(1);
    }
`;

export const ImageDisplayer = styled.img`
    border: 3px solid black;
    margin-bottom: 20px;
    animation: ${activeImage} 100ms ease-in;
`
