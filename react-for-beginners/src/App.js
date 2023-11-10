import { useState,useEffect } from "react";
import Button from "./Button";
import styles from "./app.module.css";

function App() {
  const [counter,setCounter] = useState();
  const [keyword, setKeyword] = useState("");
  const onClick = () =>{
    setCounter((prev)=>prev+1);
  }
  
  const onChange=(event)=>{
    setKeyword(event.target.value);
  }
  useEffect(()=>{
    console.log("i finding movie");
  }, [keyword]);
  return (
    <div>
      <input
      value={keyword}
      type = "text"
      placeholder="Search"
      onChange={onChange}
      >
      </input>
      <h1 className={styles.title}>{counter}</h1>
      <Button text = "Press this" onClick = {onClick}/>
    </div>
  );
}

export default App;
