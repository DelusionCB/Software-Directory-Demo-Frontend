import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Routes, Route, Outlet} from 'react-router-dom';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import ErrorPage from './Views/Error'

export default function App () {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="directory/create/new" element={<h1>Testitest</h1>} />
                <Route path='*' element={<ErrorPage />} />
            </Route>
        </Routes>
    );
}

function Layout () {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

function Home () {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}
