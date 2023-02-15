import React from 'react'
import styles from '../../styles/Tag.module.scss'

interface TagProps{
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Tag = ({children, onClick}:TagProps) => {
  return (
    <button className={styles.tag}>{children}</button>
  )
}

export default Tag