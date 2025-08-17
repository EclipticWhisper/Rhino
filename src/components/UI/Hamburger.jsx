import { useState } from "react";
import Hamburger from "hamburger-react";
import NavLinks from "./NavLinks";

export default function HamburgerComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger icon (always visible in corner) */}
      <div className="hamburgerD">
        <Hamburger size={24} toggled={open} toggle={setOpen} color="#ffc404" />
      </div>

      {/* Menu overlay */}
      {open && (
        <div className="toggleH">
          <header className="hamburgerH">
            {/* Close button inside menu */}
            <Hamburger size={24} toggled={open} toggle={setOpen} color="#ffc404" />
          </header>
          <main className="hamburgerM">
            <NavLinks />
          </main>
        </div>
      )}
    </>
  );
}
