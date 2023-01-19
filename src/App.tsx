import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Routes, Route, Outlet} from 'react-router-dom';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import ErrorPage from './Views/Error/Error'
import DirectoryPage from './Views/Directory/Directory'
import DirectoryItem from './Views/DirectoryItem/DirectoryItem'
import DirectoryFields from './Views/DirectoryFields/DirectoryFields'

export default function App () {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<DirectoryPage />} />
                <Route path="/directory/:id" element={<DirectoryItem />} />
                <Route path="directory/create/new" element={<DirectoryFields />} />
                <Route path="directory/edit/:id" element={<DirectoryFields />} />
                <Route path='*' element={<ErrorPage />} />
            </Route>
        </Routes>
    );
}

function Layout () {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
