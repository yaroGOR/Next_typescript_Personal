import React from 'react'
import styles from '../../styles/SectionHeader.module.scss'

interface ISectionHeader {
    children: React.ReactNode;
}

const SectionHeader = ({children}:ISectionHeader) => {
  return (
    <h2 className={styles.header}>{children}</h2>
  )
}

export default SectionHeader