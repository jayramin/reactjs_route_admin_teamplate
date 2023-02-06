import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import Animate from "react-smooth/lib/Animate.js";
export default function App() {
  const [showBasic, setShowBasic] = useState(false);
  const MenuData = {
    "/home": "Home",
    "/about": "About us",
    "/login": "Signin",
  };
  let MenuList = Object.entries(MenuData).map(([key,value],count)=>{
    return <MDBNavbarItem key={count}>
        <Link className="nav-link" to={key}>{value}</Link>
  </MDBNavbarItem>
  })
  return (
    <Animate easing="spring" from={{ x: 100 }} to={{ x:0 }}>
    {({ x }) => (
        <div style={{
            transform: `translate( ${x}px,0)`,
          }}>
        <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">Brand</MDBNavbarBrand>
  
          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
  
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              {MenuList}
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    Dropdown
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>
  
            <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control"
                placeholder="Type query"
                aria-label="Search"
              />
              <MDBBtn color="primary">Search</MDBBtn>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      </div>
    )}
    
  </Animate>
  
  );
}
