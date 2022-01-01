import { Fragment } from 'react';
import { Banner } from '../banner/Banner';
import { Header } from '../header/Header';
import './App.css';

function App() {
    return (
        <Fragment>
            <Header />
            <Banner />
        </Fragment>
    );
}

export default App;