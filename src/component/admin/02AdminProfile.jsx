import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import React from 'react';
import BreadcrumSection from './pages/sections/BreadcrumSection';
import TopNavigation from './topNavigation';
import SideNavigation from './sideNavigation';
import { MDBRow } from 'mdb-react-ui-kit';
import Footer from './Footer';

function AdminProfile(props) {
    return (
        <>
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
                            <MDBCard className="mb-5">
                                <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
                                    <div className="">
                                        <h2>Edit profile</h2>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRow>
                    </main>
                    <Footer />
                </div>
            </>
        </>
    );
}

export default AdminProfile;