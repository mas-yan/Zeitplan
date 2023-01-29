import { useState } from "react";
import Button from "../Button";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Navbar({stickyClass,myRef}) {
    
    const [navbar, setNavbar] = useState(false);
    

    return (
        <nav ref={myRef} className={`top-0 container lg:left-auto md:px-0 ${stickyClass}`} style={{'zIndex': 9999}}>
            <div className="relative">
                <div className="lg:flex lg:items-center lg:justify-between py-3 lg:py-5 bg-white rounded-lg shadow-lg px-10">
                    <div className="flex justify-between">
                        <Logo/>
                        <div className="lg:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className={`lg:w-1/2 lg:flex justify-end mr-10 lg:mt-0 mt-8 ${
                                navbar ? "block" : "hidden"
                            }`}>
                        <Nav/>
                        <Button className={'px-5 py-[5px] lg:py-[10px] w-fit lg:mt-0 mt-6 lg:ml-10 flex items-center rounded-md'}>Download <img src="arrow-forward.png" className="inline-block md:ml-[15px]" alt="arroforward" /></Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}