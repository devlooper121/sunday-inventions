import React from "react";
import styles from "./BubbleText.module.css"


const BubbleText = (props) => {
    const mouseOverHandler = (e) => {
        e.target.classList.add(styles.rubberAnimation);
        setTimeout(() => {
            e.target.classList.remove(styles.rubberAnimation)
        }, 700)
    }
    const letterArr = props.text.split("");
    return (
        <p style={{marginLeft:"100px"}}>
            {letterArr.map(char=>{
                return <span onMouseOver={mouseOverHandler } key={Math.random().toString()} className={styles.bubble}>{char}</span>
            })}
        </p>
    )
}


export default BubbleText;


