import React, { useState } from 'react';

function App() {
  return (
    <Navbar>
      <NavItems icon="🛵" />
      <NavItems icon="🛵" />
      <NavItems icon="🛵" />
      <NavItems icon="🛵" >
        <DropdownMenu />
      </NavItems>

    </Navbar>
  );
}

function Navbar(props) {
  return (
    <navbar className="navbar">
      <ul className="navbar-nav">
        {props.children}
      </ul>
    </navbar>
  )
}
function NavItems(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => { setOpen(!open) }}>
        {props.icon}
      </a>
      { open && props.children}
    </li>
  )
}

function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <a href="" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-button">{props.rightIcon}</span>
      </a>
    )
  }
  return (
    <div className="dropdown">
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem
        leftIcon={'😂'}
        rightIcon={'😍'}
      >

      </DropdownItem>
    </div>
  )
}

export default App;
