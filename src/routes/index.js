import React from 'react';

// import Login from 'pages/public/Authentication/Login';
// import Signup from 'pages/public/Authentication/Signup';
// import ForgotPassword from 'pages/public/Authentication/Forgotpassword';
// import ConfirmForgotPassword from 'pages/public/Authentication/Confrimforgotpassword';

import Home from 'pages/Home';
import About from 'pages/About'
// import Blog from 'pages/public/Home/Blog';
// import BlogDetails from 'pages/public/Home/BlogDetails';
// import Faq from 'pages/public/Home/Faq';
// import AboutUs from 'pages/public/Home/AboutUs';
// import Application from 'pages/public/Application';
// import DetailsApplication from 'pages/public/Application/DetailsApplication';


const publicRoutes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> }
    //   { path: '/blog', element: <Blog /> },
    //   { path: '/blog/:id', element: <BlogDetails /> },
    //   { path: '/faq', element: <Faq /> },
    //   { path: '/about-us', element: <AboutUs /> },
    //   { path: '/application', element: <Application /> },
    //   { path: '/application/details', element: <DetailsApplication /> }
];

export { publicRoutes };