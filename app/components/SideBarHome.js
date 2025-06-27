'use client'

import { useState } from "react";
import { AboutIcon, EditMap, LeftArrowIcon, NavigationIcon, SearchIcon, UpArrowIcon } from "./Icons";

export default function SideBarHome() {
    const [showSearchOptions, setShowSearchOptions] = useState(false);
    const [showNavOptions, setShowNavOptions] = useState(false);
    const [searchBy, setSearchBy] = useState("Panchayat");
    const searchOptions = ["Panchayat", "General"];
    const districts = ["Select","Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha", "Kottayam", "Idukki", "Ernakulam", "Thrissur", "Palakkad", "Malappuram", "Kozhikode", "Wayanad", "Kannur", "Kasaragod"];
    const taluks = ["Select", "Thiruvananthapuram", "Nedumangadu", "Chirayinkeezhu", "Kattakada", "Neyyattinkara", "Varkala"];
    const villages = ["Select", "Andoorkonam", "Attipra", "Cheruvakkal", "Iroopara(Ayiroopara)", "Kadakampally", "Kadinamkulam", "Kalliyoor", "Kazhakoottam", "Keezhthonnakkal", "Kudappanakunnu"];

    function onSearchByChange(){
        let value = document.getElementById("search-by").value;
        setSearchBy(value);
    }

    function onSearchClick(){
        setShowSearchOptions(!showSearchOptions);
        setShowNavOptions(false);
    }

    function onNavClick(){
        setShowNavOptions(!showNavOptions);
        setShowSearchOptions(false);
    }

    return (
        <div className="absolute z-10 top-0 bottom-0 left-0 w-70 bg-[#F0F2F5] p-2 rounded-r-2xl">
            <div className={`w-full rounded-lg transition ease-in-out text-black ${showSearchOptions ? "bg-white" : "hover:bg-white"} ${showNavOptions ? "hidden" : ""}`}>
                <div className="flex items-start p-2">
                    <button
                        type="button"
                        disabled={showSearchOptions}
                        onClick={onSearchClick}
                        className="flex items-center w-full text-left"
                    >
                        < SearchIcon/>
                        Search
                    </button>
                    {showSearchOptions && (
                        <button
                            type="button"
                            onClick={onSearchClick}
                            className="ml-auto"
                        >
                            < UpArrowIcon/>
                        </button>
                    )}
                </div>
                {showSearchOptions && (
                    <div className="flex flex-col px-2 pb-2">
                        <hr className="border-[#E5E8EB]" />
                        <div className="mt-2 flex items-center">
                            <label className="text-xs text-black mr-2">Search by</label>
                            <select id="search-by" className="text-xs bg-[#F0F2F5] px-2 py-1 rounded-sm" onChange={onSearchByChange}>
                                <option value={searchOptions[0]}>{searchOptions[0]}</option>
                                <option value={searchOptions[1]}>{searchOptions[1]}</option>
                            </select>
                        </div>
                        {(searchBy == "General") && (
                            <input
                                className="mt-2 p-2 w-full border-1 border-[#7B7B7B] rounded-lg"
                                placeholder="Search"
                            />
                        )}
                        {(searchBy == "Panchayat") && (
                            <div className="flex flex-col">
                                <select className="mt-2 p-2 w-full border-1 border-[#7B7B7B] rounded-lg">
                                    {districts.map((option, index) => {
                                        return <option key={index} value={option}>{option}</option>
                                    })}
                                </select>
                                <select className="mt-2 p-2 w-full border-1 border-[#7B7B7B] rounded-lg">
                                    {taluks.map((option, index) => {
                                        return <option key={index} value={option}>{option}</option>
                                    })}
                                </select>
                                <select className="mt-2 p-2 w-full border-1 border-[#7B7B7B] rounded-lg">
                                    {villages.map((option, index) => {
                                        return <option key={index} value={option}>{option}</option>
                                    })}
                                </select>
                            </div>
                        )}
                        <button className="mt-2 py-2 px-4 bg-[#1E2E33] rounded-xl text-white text-sm">Search</button>
                    </div>
                )}
            </div>
            <div className={`my-2 w-full rounded-lg transition ease-in-out text-black ${showNavOptions ? "bg-white" : "hover:bg-white"}`}>
                {showNavOptions && (
                        <div className="px-1 py-2 flex items-center justify-items-start" onClick={onNavClick}>
                            < LeftArrowIcon/>
                            <label className="text-sm text-black">Go back</label>
                        </div>
                    )}
                <div className="flex items-start p-2">
                    <button
                        type="button"
                        disabled={showNavOptions}
                        onClick={onNavClick}
                        className="flex items-center gap-2 w-full text-left"
                    >
                        < NavigationIcon/>
                        Navigation
                    </button>
                </div>
                {showNavOptions && (
                    <div className="flex flex-col px-2 pb-2">
                        <hr className="border-[#E5E8EB]" />
                        <input
                            className="mt-2 p-2 w-full border-1 border-[#7B7B7B] rounded-lg"
                            placeholder="Search"
                        />
                        <input
                            className="mt-2 p-2 w-full border-1 border-[#7B7B7B] rounded-lg"
                            placeholder="Search"
                        />
                        <button className="mt-2 py-2 px-4 bg-[#1E2E33] rounded-xl text-white text-sm">Get Directions</button>
                    </div>
                )}
            </div>
            <div className={`${showNavOptions?"hidden":""}`}>
            
            <button type='button'
            className="hover:bg-white transition ease-in-out text-black my-2 w-full rounded-lg p-2 inline-flex"
            ><EditMap />Edit Map</button>

            <button 
            type="button"
            className="hover:bg-white transition ease-in-out text-black my-2 w-full rounded-lg p-2 inline-flex"
            onClick={async () => {
            try {
                const res = await fetch('/api/insert-road', { method: 'POST' });
                const text = await res.text();

                if (res.ok) {
                    console.log('Insert successful:', text);
                    alert('Road feature inserted successfully!');
                } else {
                    console.error('Insert failed:', text);
                    alert('Insert failed: ' + text);
                }
            } catch (error) {
                console.error('Request error:', error);
                alert('Error: ' + error.message);
            }
            }}
            >
            <EditMap />
                Send XML
            </button>



                <button type="button" className="hover:bg-white transition ease-in-out text-black my-2 w-full rounded-lg p-2 inline-flex">
                    < AboutIcon/>
                    About
                </button>
            </div>
            <div className="flex flex-col items-center absolute left-0 right-0 bottom-10 text-center">
                <img className="w-10 h-10" src="public/logo.png" alt="KSREC logo"/>
                <label className="text-[#9A9A9A] text-xs">©SANCHARi 2025</label>
            </div>
        </div>
    );
}   