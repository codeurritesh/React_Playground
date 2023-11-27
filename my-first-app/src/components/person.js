import './person.css'; 
const person=(props)=>{
console.log(props);

    return (
       <article className="person">
        <h2>Name: {props.name}</h2>
        <h3>Age:{props.age}</h3>
        <h3> Company Name:{props.company}</h3>
       </article>
    )
}
export default person; 