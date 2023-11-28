const Alltodos=["homeword","Shopping","Eating","Coding","Project","Schlorship"];
// const addbutton=document.getElementById("addtodo");
// // let clicked=false;
// addbutton.addEventListener('click',()=>{
// alert('clicked');})
// console.log(clicked);
const todos=()=>{
    const shoot = () => {
        alert("Great Shot!");
        return (
            <div>
<h1>Button clicked</h1>  
</div>    )
      }
        
return (


    <div>
    <div className="person">
        <h3>All todos</h3>
        <ul>
            {Alltodos.map((item)=>{
                return <h4><li>{item}</li></h4>;
            })}
        </ul>
        <button className="btn btn-dark" id="addtodo" onClick={shoot}>Add new todo</button>

    </div>
    
  
    </div>
)

}
export default todos;