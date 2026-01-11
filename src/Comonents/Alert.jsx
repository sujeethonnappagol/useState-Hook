import { useState } from "react";
function Alert() {
    let [alertStatus, setAlertStatus] = useState(false);
    function alertHandler(){
        setAlertStatus(prev => !prev)
    }
    return(
        <>
        { alertStatus ? <div className="rounded-3xl border absolute bg-neutral-50 px-6 py-3 right-3 top-2">This is a react alert</div>  : ""}
           <div className="w-[400px] mx-auto mt-5">
                <h1 className="text-3xl font-semibold">This is simple Alert app</h1>
                <p className="mt-3">This is a simple counter component.</p>
                <button onClick={alertHandler} className="mt-3 py-2 px-5 bg-orange-400 rounded-lg text-white"> {alertStatus ? 'Hide' : 'Show'} Alert</button>
           </div>
        </>
    )
}
export default Alert;