const Alltodos=["homeword","Shopping","Eating","Coding","Project","Schlorship"];
// const addbutton=document.getElementById("addtodo");
// // let clicked=false;
// addbutton.addEventListener('click',()=>{
// alert('clicked');})
// console.log(clicked);
const todos=()=>{
   
        
return (
    <div>
    <div className="person">
        <h3>All todos</h3>
        <ul>
            {Alltodos.map((item)=>{
                return <h4><li>{item}</li></h4>;
            })}
        </ul>
        <button className="btn btn-dark" id="addtodo">Add new todo</button>

    </div>
    
  
    </div>
)

}
export default todos;