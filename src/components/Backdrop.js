import React from "react";

function Backdrop({sidebar, closeSidebar}){
    return (
        <div className={sidebar? "backdrop backdrop--open": "backdrop"} onClick={closeSidebar}>
         
        </div>
    )
}
export default Backdrop;