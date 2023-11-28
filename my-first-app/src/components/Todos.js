const Alltodos=["homeword","Shopping","Eating","Coding","Project","Schlorship"];
const middlebox=document.getElementsByClassName("middlebox");


const todos=()=>{
    const shoot = () => {
        console.log(middlebox);
      }
        
return (
    <div className="person">
        <h3>All todos</h3>
        <ul>
            {Alltodos.map((item)=>{
                return <h4><li>{item}</li></h4>;
            })}
        </ul>
        <button className="btn btn-dark" id="addtodo" onClick={shoot}>Add new todo</button>

    </div>
)

}
export default todos;