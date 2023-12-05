import Link from "next/link";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const links = [
    { lable: "Dashboard", href: "/" },
    { lable: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-3">
        {links.map((link) => {
          return (
            <Link
              key={link.lable}
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
              href={link.href}
            >
              {link.lable}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
