'use client'

import { useState } from "react";
import { ExitIcon, LogIcon, MapIcon, SettingsIcon } from "./Icons";

export default function SideBarEditMap() {
    const [activeTab, setActiveTab] = useState("map");

    function onTabClick(tab) {
        setActiveTab(tab);
    }

    return (
        <div className="flex absolute z-10 top-0 bottom-0 left-0 w-80 bg-white rounded-r-2xl">
            <div className="flex flex-col bg-[#F0F2F5] w-auto">
                <button onClick={()=>{onTabClick("map")}} className={`m-2 p-2 hover:bg-white rounded-2xl ${activeTab=="map"?"bg-white":""}`}>
                    < MapIcon/>
                </button>
                <button onClick={()=>{onTabClick("log")}} className={`m-2 p-2 hover:bg-white rounded-2xl ${activeTab=="log"?"bg-white":""}`}>
                    < LogIcon/>
                </button>
                <button onClick={()=>{onTabClick("settings")}} className={`m-2 p-2 hover:bg-white rounded-2xl ${activeTab=="settings"?"bg-white":""}`}>
                    < SettingsIcon/>
                </button>
                <button onClick={()=>{onTabClick("exit")}} className={`m-2 p-2 hover:bg-white rounded-2xl ${activeTab=="exit"?"bg-white":""}`}>
                    < ExitIcon/>
                </button>
            </div>
            <div className="flex-1">
                //
            </div>
        </div>
    );
}