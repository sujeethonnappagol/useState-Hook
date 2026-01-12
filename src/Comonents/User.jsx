import { useState } from "react";
function User() {
    let [user, setUser] = useState({
        name: "Sujeet H",
        age: 22,
        profession: "Student",
        image: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=600",
        requestSent: false,
        isFollowing: false
    });
    function setRequestHandler() {
        setUser((prev) => ({
            ...prev = user,
            requestSent:true,
        })
        )
        console.log("Follow request sent to ", user.name);
    }
    return(
        <>
           <div className="px-5 py-2 m-7 bg-neutral-100 rounded-md w-[400px] bg-white mx-auto flex justify-between items-center">
              <div className="items-center gap-4 flex">
                  <img className=" h-12 w-14 object-cover rounded-full" src={user.image} alt="" />
                <div className="items-center">
                   <p className="text-1xl font-bold ">{user.name}</p>
                   <p className="text-sm">{user.profession}</p>
                </div>
              </div>
              <button onClick={setRequestHandler} className=" text--black px-3 font-bold py-2 rounded-lg">{user.requestSent ? "Request Sent" : "Follow"}</button>
           </div>
        </>
    )
}
export default User;