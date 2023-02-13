import React from 'react'
import styles from '../../styles/Button.module.scss'
interface ButtonProps {
    text:string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({text, onClick = () => {console.log('clicked')}}:ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>{text}</button>
  )
}

export default Button