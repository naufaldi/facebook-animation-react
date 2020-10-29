import React, { useState, useEffect, useRef } from 'react';
import { TransitionGroup,CSSTransition } from 'react-transition-group';

function App() {
  return (
    <Navbar>
      <NavItems icon="🛵" />
      <NavItems icon="🚕" />
      <NavItems icon="🚟" />
      <NavItems icon="🚀" >
     <CSSTransition
     transitionName = "dropdown" 
     transitionEnterTimeout={1000} transitionLeaveTimeout={1000}
     >
        <DropdownMenu />
     </CSSTransition>
     
      </NavItems>

    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {props.children}
      </ul>
    </nav>
  )
}
function NavItems(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <p className="icon-button" onClick={() => { setOpen(!open) }}>
        {props.icon}
      </p>
      { open && props.children}
    </li>
  )
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null)
  const dropdownRef = useRef(null);

  // useEffect(() => {
  //   setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  // }, [])

  function calcHeight(el) {
    console.log("Offset height : ", el.offsetHeight)
    const height = el.offsetHeight;
    setMenuHeight(height)
  }
  function DropdownItem(props) {
    return (
      <p className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </p>
    )
  }
  return (
    // <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
    <div className="dropdown" style={{ height: menuHeight }} >
      <CSSTransition in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={'😂'}
            rightIcon={'😎'}
            goToMenu="setting"
          >
            Setting
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition in={activeMenu === "setting"} unmountOnExit timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">

          <DropdownItem leftIcon="⬅️" goToMenu="main"> <span>Tutorial</span>  </DropdownItem>
          <DropdownItem
            leftIcon="🏀"
          >
            Ball
          </DropdownItem>
          <DropdownItem
            leftIcon="🥎"
          >
            Base
          </DropdownItem>
          <DropdownItem
            leftIcon="🏐"
          >
            Basket
          </DropdownItem>
        </div>

      </CSSTransition>
    </div >
  )
}

export default App;
