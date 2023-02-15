import React from 'react'
import styles from '../../styles/Contact.module.scss'
import ContactForm from './ContactForm'
import SectionHeader from '../SectionHeader/SectionHeader'

const Contact = () => {
  return (
    <div className={styles.container}>
        <SectionHeader>Contact me</SectionHeader>
        <ContactForm/>
    </div>
  )
}

export default Contact