import { useState } from "react";
function Counter() {
    let [counter, setCounter] = useState(0);
    function incrementHandler(){
        // setCounter(counter + 1);
        setCounter((prev)=> prev +1)
    }
    function decrementHandler(){
        setCounter((prev)=> prev -1)
    }
    return(
        <>
           <div className="w-[400px] mx-auto mt-5">
                <h1 className="text-3xl font-semibold">Counter demo</h1>
                <p className="mt-3">This is a simple counter component.</p>

                <h1 className="text-3xl font-bold">{counter}</h1>
                <div className="flex gap-4 mt-3">
                      <button onClick={incrementHandler} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Increment</button>
                      <button onClick={decrementHandler} className="bg-blue-500 text-white px-4 py-2 rounded-lg">decrement</button>

                </div>

           </div>
        </>
    )
}
export default Counter;