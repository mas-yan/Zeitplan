import NavItem from "./NavItem";

export default function Nav() {
    return(
        <ul className="flex space-x-10">
            <NavItem active={true}>Home</NavItem>
            <NavItem>Fitur-Fitur</NavItem>
            <NavItem>Harga</NavItem>
            <NavItem>Testimoni</NavItem>
        </ul>
    )
}