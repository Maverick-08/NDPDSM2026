import { Link } from "react-scroll";
import manitLogo from "../../assets/manitLogo.jpg";
import conferenceLogo from "../../assets/NPDSM.png";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Conference Details", href: "#conferenceDetails" },
    { name: "Registration", href: "#registration" },
    { name: "Publication", href: "#publication" },
    { name: "Schedule", href: "#schedule" },
    { name: "Committee", href: "#committee" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full shadow flex justify-center fixed top-0 left-0 p-4">
      <div className="w-full max-w-7xl flex justify-between items-center gap-8">
        <div className="w-[20%] flex items-center gap-2">
          <img
            src={manitLogo}
            alt=""
            className="w-16 h-16 md:w-20 md:h-20 rounded-full"
          />
          <img
            src={conferenceLogo}
            alt=""
            className="w-16 h-16 md:w-20 md:h-20 rounded-lg"
          />
        </div>
        <div className="w-[70%] flex justify-between items-center text-lg">
          {navLinks.map((links, idx) => {
            // 1. spy={true} watches scroll events and checks if #section is visible.
            // 2. When #section is in the viewport, the link automatically gets the "active" CSS class.
            return (
              <Link
                key={idx}
                to={links.href}
                smooth={true}
                duration={500}
                spy={true}
                className="cursor-pointer"
                activeClass="active"
              >
                {links.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
