import React from 'react'
import Profiles from './profiles'
import style from './githubApp.module.css'

const githubApp = () => {
  return (
    <div className={style.MainBox}>
<h1>Github App</h1>
        <Profiles/>
    </div>
  )
}

export default githubApp