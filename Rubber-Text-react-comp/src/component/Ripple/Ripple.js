import React, { useState } from "react";
import { RippleSpan, StyledDiv } from './Ripple.styles';

const Ripple = (props) => {
    const [clicked, setClicked] = useState(false);
    const [location, setLocation] = useState({ x: props.width/2, y: props.height/2 });
    const animationTime = 1500;
    const clickHandler = (e) => {
        setClicked(true);
        if (!props.centerRipple) {
            setLocation({
                x: e.clientX - e.target.offsetLeft,
                y: e.clientY - e.target.offsetTop,
            })
        }
        setTimeout(() => {
            setClicked(false);
        }, animationTime/2);
    };

    return (
        <StyledDiv onMouseDown={clickHandler} width={props.width} height={props.height}>
            {!props.disabledRipple && clicked && (
                <RippleSpan
                    left={location.x}
                    top={location.y}
                    animationTime={animationTime}
                    width={props.width}
                    color={'#0003'}
                />
            )}
            nothing
        </StyledDiv>
    )
}

export default Ripple;