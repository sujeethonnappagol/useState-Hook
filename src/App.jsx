import { useState } from "react";
import Counter from "./Comonents/Counter.jsx";
import Alert from "./Comonents/Alert.jsx";
function App(){
  let [age, setAge] = useState(20);
  return (
    // <>
    //    <div className="text-center text-4xl font-bold">hey! my age is {age}</div>
    //    <div className="text-center">
    //       <button onClick={()=>{
    //         setAge(30);
    //         console.log("age updated to ", age)
    //       }} className="rounded-lg px-4 py-2 bg-blue-500 text-white mt-3">Update my age</button>
    //    </div>
    // </>

    // <Counter />
    <Alert />
  )
}

export default App;