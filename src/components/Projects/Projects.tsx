import React from 'react'
import ProjectCard from './ProjectCard'
import styles from '../../styles/Projects.module.scss'
import SectionHeader from '../SectionHeader/SectionHeader'

const Projects = () => {
  return (
    <div className={styles.container}>
      <SectionHeader>pRojects</SectionHeader>
      <ProjectCard type = {'left'}/>
      <ProjectCard type = {'right'}/>


      </div>
  )
}

export default Projects