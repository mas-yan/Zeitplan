import NavItem from "./NavItem";

export default function Nav() {
  return (
    <ul className="items-center justify-center space-y-4 lg:flex lg:space-x-10 lg:space-y-0">
      <NavItem link={"#"} active={true}>
        Home
      </NavItem>
      <NavItem link={"#fitur"}>Fitur-Fitur</NavItem>
      <NavItem link={"#harga"}>Harga</NavItem>
      <NavItem link={"#testi"}>Testimoni</NavItem>
    </ul>
  );
}
