import React from 'react'
import Card from './profileCard'
import style from './profile.module.css'
const profiles = () => {
  return (
    <div className={style.cardBox}>
        <Card username='codeurritesh'/>
        <Card username='philomathtanya'/>
        <Card username='aryan-upa'/>
        <Card username='pradhumn14'/>
        <Card username='swastik2703'/>
        
    </div>
  )
}

export default profiles