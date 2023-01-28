import Button from "../Button";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Navbar() {
    return (
        <div className="container mx-auto pt-14">
            <div className="flex items-center bg-white rounded-md shadow-lg py-8">
                <Logo/>
                <div className="w-1/2 flex items-center justify-end mr-10">
                    <Nav/>
                    <Button>Download <img src="arrow-forward.png" className="inline-block" alt="arroforward" /></Button>
                </div>
            </div>
        </div>
    )
}