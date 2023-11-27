const moods=["🥰","😎","🥺","😨","😭","🥳"];
const generatemood=()=>{
    return moods[Math.floor(Math.random()*moods.length)];
}
const first=()=>{

    return (
       <article className="person">
        <h1>My Mood is {generatemood()}</h1>
       </article>
    )
}
export default first; 