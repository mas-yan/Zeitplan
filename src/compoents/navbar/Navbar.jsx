import Button from "../Button";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Navbar() {
    return (
        <div className="">
            <div className="flex items-center bg-white rounded-md shadow-lg py-8">
                <Logo/>
                <div className="w-1/2 flex items-center justify-end mr-10">
                    <Nav/>
                    <Button className={'px-5 py-[10px] ml-10 flex items-center'}>Download <img src="arrow-forward.png" className="inline-block ml-[15px]" alt="arroforward" /></Button>
                </div>
            </div>
        </div>
    )
}