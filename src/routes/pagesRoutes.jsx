import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../pages/homePage.jsx';
import Aboutus from '../pages/aboutUsPage';
import Joincomms from '../pages/joinCommunity';
import Educator from '../pages/educatorPage';
import Testimonals from '../pages/testimonials.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/footer.jsx';
import ScrollToTop from '../components/scrollpage.jsx';
import EducatorRegistration from '../components/registerPage.jsx';
import GetInvolved from '../components/getInvolved.jsx';
import Signup from '../components/signup.jsx';

const routes = createBrowserRouter([
    {
        path: "/about",
        element: (
            <>
                    <ScrollToTop />
                    <Navbar />
                    <Aboutus />
                    <Footer />
            </>
        )
    },
    {
        path: "/join",
        element: (
                <>
                    <ScrollToTop />
                    <Navbar />
                    <Joincomms />
                    <Footer />
                </>
        )
    },
    {
        path: "/educator",
        element: (
                <>
                    <ScrollToTop />
                    <Navbar />
                    <Educator />
                    <Footer />
                </>
        )
    },
    {
        path: "/testimonials",
        element: (
                <>
                    <ScrollToTop />
                    <Navbar />
                    <Testimonals />
                    <Footer />
                </>
        )
    },
    {
        path: "/",
        element: (
                <>
                    <ScrollToTop />
                    <Navbar />
                    <Homepage />
                    <Footer />
                </>
        )
    },
    {
        path: "/register",
        element: (
                <>
                    <ScrollToTop />
                    <Navbar />
                    <EducatorRegistration />
                    <Footer />
                </>
        )
    },
    {
        path: "/involved",
        element: (
                <>
                    <ScrollToTop />
                    <Navbar />
                    <GetInvolved />
                    <Footer />
                </>
        )
    },
    {
        path: "/signup",
        element: (
                <>
                    <ScrollToTop />
                    <Navbar />
                    <Signup />
                    <Footer />
                </>
        )
    }
]);

export default routes;
