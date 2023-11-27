const Alltodos=["homeword","Shopping","Eating","Coding","Project","Schlorship"];
const todos=()=>{
return (
    <div className="person">
        <h3>All todos</h3>
        <ul>
            {Alltodos.map((item)=>{
                return <h4><li>{item}</li></h4>;
            })}
        </ul>
    </div>
)

}
export default todos;