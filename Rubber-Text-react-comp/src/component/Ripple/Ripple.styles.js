
import styled, { keyframes } from 'styled-components'

export const StyledDiv = styled.span`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;   
    border: 2px solid #aaf;
    overflow: hidden;
    position: relative;
    margin-left: 200px;
    background: #faf;
    display: block;
` 

const Ripple = keyframes`
    from {
        opacity: 1;
        transform: scale(0);
    }   
    to {
        opacity: 0;
        transform: scale(10);
    }`

export const RippleSpan = styled.span`
    position: absolute;
    border-radius: 50%;
    background-color: ${(props) => props.color || '#0000003f'};
    width: ${(props) => props.width || 100}px;
    height: ${(props) => props.width || 100}px;
    margin-top: -${(props) => props.width/2}px;
    margin-left: -${(props) => props.width/2}px;
    animation-name: ${Ripple};
    animation-duration: ${(props)=>props.animationTime}ms;
    opacity: 0;
    left: ${(props) => props.left}px;
    top: ${(props)=>props.top}px;
`;