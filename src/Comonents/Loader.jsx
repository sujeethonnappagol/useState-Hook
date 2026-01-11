import { useState } from "react";
function Loader() {
    let [loadingStatus, setLoadingStatus] = useState(false);
    function loadHandler(){
        setLoadingStatus((prev)=> !prev);
    }


    return(
        <>
           <div className="w-[400px] mx-auto mt-5">
                <h1 className="text-3xl font-semibold">This is simple Loader app</h1>
                <p className="mt-3">This is a simple counter component.</p>
                <button onClick={loadHandler} className="mt-3 py-2 flex gap-5 px-5 bg-orange-400 items-center rounded-lg text-white">
                    <div className="">Load Data</div>
                    { loadingStatus ?  <div className="loader"></div> : ""}
                </button>
           </div>
        </>
    )
}
export default Loader;