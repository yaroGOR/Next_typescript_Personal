import React from 'react'
import styles from '../../styles/Dark.module.scss'
interface IDark {
    children?: React.ReactNode;
}
const DarkSection = ({children}: IDark) => {
  return (
    <div className={styles.dark}></div>
  )
}

export default DarkSection