import NavItem from "./NavItem";

export default function Nav() {
    return(
        <ul className="items-center justify-center space-y-4 md:flex md:space-x-10 md:space-y-0">
            <NavItem active={true}>Home</NavItem>
            <NavItem>Fitur-Fitur</NavItem>
            <NavItem>Harga</NavItem>
            <NavItem>Testimoni</NavItem>
        </ul>
    )
}