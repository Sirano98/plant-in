import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { NotFound } from '../pages/404-page/404-page';
import { MainPage } from '../pages/main-page/main-page';
import './App.css';

function App() {
    return (
        <Fragment>
            <Header />

            <div className='container'>
                <Routes>
                    <Route
                        path="/"
                        element={<MainPage />}
                        exatc
                    />
                    <Route
                        path="/not-found"
                        element={<NotFound />}
                    />
                </Routes>
            </div>

            <Footer />
        </Fragment>
    );
}

export default App;