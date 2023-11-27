import Person from "./components/person"
import Mood from "./components/Mood"
import Todo from "./components/Todos"
import './App.css'; 
const app=()=>{
  return (
    <div className="middlebox">
      <Mood/>
      <Todo/>
      
      <Person name="Ritesh Verma" age="22" company="Big oh notations"/>
      <Person name="Tanya Bansal" age="21" company="TATA AIG"/>
      <Person name="Aryan UPa" age="24" company="221B Bakers Street"/>
      <Person name="Rishabh Agrawal" age="22" company="TATA AIG"/>

    </div>
  
    )
}
export default app;