import { NavLink } from "react-router-dom";

export default function NavLinks() {
  const menuList = [
    { name: "Home", path: "/" },
    { name: "Meals", path: "meals" },
    { name: "About", path: "about" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <ul className="nav-list">
      {menuList.map((menu) => (
        <li key={menu.path}>
          <NavLink
            to={menu.path}
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""}`
            }
            end={menu.path === "/"}
          >
            {menu.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
