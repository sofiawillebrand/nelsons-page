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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navbar color="light" expand="sm" light>
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
