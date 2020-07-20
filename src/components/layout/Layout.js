import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom'

import routes from 'routes.js'

// component
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown, 
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn } from "mdbreact";


function App(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)

  const toggleSidebar = ()=>setSidebarOpen(!sidebarOpen)
  const toggleNavbar = ()=>setNavbarOpen(!navbarOpen)

  return (
    <div className= {`d-flex ${sidebarOpen ? "toggled" : ""}`} id="wrapper">
      {/* <!-- Sidebar --> */}
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">Start Bootstrap </div>
        <div className="list-group list-group-flush">
          {routes.map(route=><a href={route.path} key={route.name} className="list-group-item list-group-item-action bg-light">{route.name}</a> )}
        </div>
      </div>
      {/* <!-- /#sidebar-wrapper --> */}

      {/* <!-- Page Content --> */}
      <div id="page-content-wrapper">
        {/* <-- START Topnav --> */}
        <MDBNavbar color="default-color" dark expand="md">
          <MDBBtn onClick={toggleSidebar}>Toggle Sidebar</MDBBtn>
          <MDBNavbarToggler onClick={toggleNavbar} />
          <MDBCollapse id="navbarCollapse3" isOpen={navbarOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem active>
                <MDBNavLink to="/start">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/start">Features</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/start">Pricing</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">Dropdown</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="/action">Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        {/* <-- END Topnav --> */}

        <div className="container-fluid pt-4">
          <Switch>
            { routes.map(route=><Route key={route.name} path={route.path} component={route.component} />) }
          </Switch>

        </div>
      </div>
    </div>
  );
}

export default App;
