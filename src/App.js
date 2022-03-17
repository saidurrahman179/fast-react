import { useState } from "react";
import Display from "./component/Display";


function App() {
  const [count,setCount] = useState(0)
  const todo = [
    {id:"1",title:"This is my fast todo",author:"saidur rahman"},
    {id:"2",title:"This is my fast todo",author:"asadur"},
    {id:"3",title:"This is my fast todo",author:"saiful"},
    {id:"4",title:"This is my fast todo",author:"shorif"},
    {id:"5",title:"This is my fast todo",author:"Habibour rahman"},
  ]
  return (
    <div>
      <h1>Hello World</h1>
      <h1>Count value is = {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Increment</button>
     <Display></Display>
      <Show></Show>
      
      {todo.map(single=><Singlepost key={single.id}   data ={single}></Singlepost>)}
    </div>
  );
}


export default App;
function Singlepost(props){
  const {title,author,id} = props?.data
  console.log(props)
return(
  <div id={id}>
    <h1> This is title {title}</h1>
    <p>{author}</p>
  </div>
)
}

function Show(){
  return(
    <div>Hello, This is show Component running !</div>
  )
}