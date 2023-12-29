import {React,useEffect, useState} from 'react'
import style from './profileCard.module.css'

const ProfileCard = ({username}) => {
const [profile,setprofile]=useState({ avatar_url:'',name:'',followers:0,following:0})

  useEffect(()=>{
    async function fetchData(){
      const profile=await fetch(`https://api.github.com/users/${username}`);
      const data=await profile.json();
      setprofile(data);
   
      console.log(profile);
    }
    fetchData();
},[])
  
  return (
    <div className={style.card}>
      <img src={profile.avatar_url} alt='Photo'></img>
<h3>{profile.login}</h3>
<div className={style.details}>
<p>Name: {profile.name}</p>
    <p>Followers: {profile.followers}  </p>
    <p>Following: {profile.following}  </p>
    <p>Total Repos: {profile.public_repos} </p>
    <a href={profile.html_url}><button>Show</button></a>
</div>
      </div>
  )
}

export default ProfileCard