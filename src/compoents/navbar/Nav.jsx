import NavItem from "./NavItem";

export default function Nav() {
    return(
        <ul className="items-center justify-center space-y-4 lg:flex lg:space-x-10 lg:space-y-0">
            <NavItem active={true}>Home</NavItem>
            <NavItem>Fitur-Fitur</NavItem>
            <NavItem>Harga</NavItem>
            <NavItem>Testimoni</NavItem>
        </ul>
    )
}