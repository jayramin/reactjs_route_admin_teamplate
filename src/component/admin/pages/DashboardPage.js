import React from 'react';
import { MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBRow } from 'mdbreact';
import AdminCardSection1 from './sections/AdminCardSection1';
import AdminCardSection2 from './sections/AdminCardSection2';
import TableSection from './sections/TableSection';
import BreadcrumSection from './sections/BreadcrumSection';
import SideNavigation from '../sideNavigation';
import TopNavigation from '../topNavigation';
import Footer from '../Footer';
// import '../../index.css';
import '../index.css';
import { Outlet } from 'react-router-dom';
// import ChartSection1 from './sections/ChartSection1';
// import ChartSection2 from './sections/ChartSection2';
// import MapSection from './sections/MapSection';
// import ModalSection from './sections/ModalSection';
const DashboardPage = () => {
  return (
    <>
      <div className="flexible-content">
        <TopNavigation />
        <SideNavigation />

        <main id="content" className="p-5">

          {/* <ChartSection1 /> */}
          
          {/* <ChartSection2 /> */}
          <MDBRow className="mb-4">
            {/* <MapSection /> */}
            {/* <ModalSection /> */}
          <Outlet></Outlet>
          </MDBRow>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default DashboardPage;