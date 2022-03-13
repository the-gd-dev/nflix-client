import React from 'react'
import AppLayout from '../components/AppLayout/AppLayout';
import Banner from '../components/Banner/Banner';
import Row from '../components/Row/Row';
import requests from '../requests';

const Home = () => {
    return (
        <AppLayout customClasses={['Home']}>
            <Banner />
            <Row isLargeRow={true} title="Top 10 in India today" fetchURL={requests.fetchTrendingToday} />
            <Row key={1} title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} />
            <Row key={2} title="Trending Now" fetchURL={requests.fetchTrending} />
            <Row key={3} title="Action Movies" fetchURL={requests.fetchActionMovies} />
            <Row key={4} title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
            <Row key={5} title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
            <Row key={6} title="Documentries" fetchURL={requests.fetchDocumentaries} />
        </AppLayout>
    );
}

export default Home;