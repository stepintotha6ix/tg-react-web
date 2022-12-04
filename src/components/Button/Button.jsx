import React from 'react'
import styles from "./Button.css";
const Button = (props) => {
  return (
    <button {...props} className={styles.button + props.className}/>
  )
}

export default Button