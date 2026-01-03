import { NavLink } from "react-router-dom";

export default function NavLinks() {
  const menuList = [
    { name: "Home", path: "/" },
    { name: "Meals", path: "meals" },
    { name: "About", path: "about" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <ul id="Navul">
      {menuList.map((menu, index) => (
        <li id="Navli" key={index}>
          <NavLink
            to={menu.path}
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""}`
            }
            end={menu.path === "/"} // only exact match for Home
          >
            {menu.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
