import { Fragment } from 'react';
import { Navigation } from '../../navigation/Navigation';
import { Banner } from '../../banner/Banner';
import { News } from '../../news/News';
import { Top } from '../../top/Top';
import { Interesting } from '../../interesting/Interesting';

export const MainPage = () => {
    return (
        <Fragment>
            <Navigation />
            <main>
                <Banner />
                <News />
                <Top />
                <Interesting />
            </main>
        </Fragment>
    )
}