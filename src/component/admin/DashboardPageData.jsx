import React from 'react';
import AdminCardSection1 from './pages/sections/AdminCardSection1';
import AdminCardSection2 from './pages/sections/AdminCardSection2';
import BreadcrumSection from './pages/sections/BreadcrumSection';
import TableSection from './pages/sections/TableSection';
import TopNavigation from './topNavigation';
import SideNavigation from './sideNavigation';
import { MDBRow } from 'mdb-react-ui-kit';
import Footer from './Footer';

const DashboardPageData = (props) => {
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
                        <BreadcrumSection />
                        <AdminCardSection1 />
                        <TableSection />
                        <AdminCardSection2 />
                    </MDBRow>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default DashboardPageData;