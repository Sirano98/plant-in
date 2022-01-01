import { Fragment } from 'react';
import { Banner } from '../banner/Banner';
import { Header } from '../header/Header';
import { Navigation } from '../navigation/Navigation';
import './App.css';

function App() {
    return (
        <Fragment>
            <Header />
            <Navigation />
            <Banner />
        </Fragment>
    );
}

export default App;