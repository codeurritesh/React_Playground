const Alltodos=["homeword","Shopping","Eating","Coding","Project","Schlorship"];

var showform=true;
var showdiv=false;
const todos=()=>{
    const shoot = () => {
        showform=true;
        showdiv=false;
        console.log("button clicked")
      }
        
return (
    <div>

    {showform && (<div>
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
)}
{showdiv && (
    <div>
        <h1> Hello Clicked</h1>
    </div>
)}
</div>
)

}
export default todos;