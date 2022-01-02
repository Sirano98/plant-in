import { Fragment } from 'react';
import { Banner } from '../banner/Banner';
import { Header } from '../header/Header';
import { Interesting } from '../interesting/Interesting';
import { Navigation } from '../navigation/Navigation';
import { News } from '../news/News';
import { Top } from '../top/Top';
import './App.css';

function App() {
    return (
        <Fragment>
            <Header />
            <div className='container'>
                <Navigation />
                <main>
                    <Banner />
                    <News />
                    <Top />
                    <Interesting />
                </main>
            </div>
        </Fragment>
    );
}

export default App;