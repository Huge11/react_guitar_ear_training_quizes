import React, {useState} from 'react';
import { Switch, Route, useLocation } from 'react-router-dom'


import routes from 'routes.js'

// component
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown, 
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn as Button } from "mdbreact";


function App(props) {
  const [appOrder, setAppOrder] = useState(routes.map(route=>route.path))

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
        <TopNav toggleSidebar={toggleSidebar} toggleNavbar={toggleNavbar} navbarOpen={navbarOpen} />

        <div className="container-fluid pt-4">
          <Wizard paths={appOrder}>
            <Switch>
              { routes.map(route=><Route key={route.name} path={route.path} component={route.component} />) }
            </Switch>
          </Wizard>
        </div>
      </div>
    </div>
  );
}

export default App;


function Wizard({paths, children}){
  const current = paths.indexOf(useLocation().pathname)
  return (
    <div>
      <Button color="primary" href={paths[current-1]} disabled={current < 1} >Back</Button>
      <Button color="primary" href={paths[current+1]} disabled={current >= paths.length-1} >Next</Button>
      <Button color='primary' href={paths[current]}>Reset</Button>
      <hr />
      { children } 
      <hr />
      <Button color="primary" href={paths[current-1]} disabled={current < 1} >Back</Button>
      <Button color="primary" href={paths[current+1]} disabled={current >= paths.length-1} >Next</Button>
      <Button color='primary' href={paths[current]}>Reset</Button>
    </div>
  )
}

function TopNav({toggleNavbar, toggleSidebar, navbarOpen}){
  return (
    <MDBNavbar color="default-color" dark expand="md">
      <Button  onClick={toggleSidebar}>Toggle Sidebar</Button>
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
  )
}