import React from "react";

function sideBar({sidebar, closeSidebar}){
    return (
        <div className={sidebar? "sidebar sidebar--open": "sidebar"}>
            <a href="#header" onClick={closeSidebar}>Home</a>
            <a href="#writeup" onClick={closeSidebar}>$Punk</a>
            <a href="#roadmap" onClick={closeSidebar}>Roadmap</a>
            <a href="#pnks" onClick={closeSidebar}>Technomics</a>
            <a href="#header" onClick={closeSidebar}>Buy Now</a>
        </div>
    )
}
export default sideBar;