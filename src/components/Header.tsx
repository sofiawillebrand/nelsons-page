import { useState } from "react";
import {
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Nav,
  Collapse,
} from "reactstrap";
import colors from "../styling/color-palette.json";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navbar
        expand="sm"
        dark
        style={{ backgroundColor: colors.brown }}
      >
        <NavbarBrand href="/">Nelsons page</NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">About Nelson</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/activation">Activation</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/care">Care</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/checklist">Checklist</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
