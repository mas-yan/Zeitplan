export default function NavItem({ children, active, link }) {
  const activated = active
    ? "text-primary-500"
    : "text-gray-900 text-opacity-50";
  return (
    <>
      <li>
        <a
          href={`${link}`}
          className={`font-sans text-lg font-semibold text-primary-500 ${activated}`}
        >
          {children}
        </a>
      </li>
    </>
  );
}
