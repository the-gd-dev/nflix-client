import React from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import Banner from "../components/Banner/Banner";
import Row from "../components/UI/Row/Row";
import { allRequests as requests } from "../api/movies";

const Home = () => {
  window.document.title = "Netflix Clone - Browse"
  const moviesRows = [
    {
      id: "01",
      isLargeRow: true,
      title: "Top 10 in India today",
      fetchURL: requests.fetchTrendingToday,
    },
    {
      id: "02",
      title: "NETFLIX ORIGINALS",
      fetchURL: requests.fetchNetflixOriginals,
    },
    {
      id: "03",
      title: "Trending Now",
      fetchURL: requests.fetchTrending,
    },
    {
      id: "04",
      title: "Action Movies",
      fetchURL: requests.fetchActionMovies,
    },
    {
      id: "05",
      title: "Comedy Movies",
      fetchURL: requests.fetchComedyMovies,
    },
    {
      id: "06",
      title: "Horror Movies",
      fetchURL: requests.fetchHorrorMovies,
    },
    {
      id: "07",
      title: "Documentries",
      fetchURL: requests.fetchDocumentaries,
    },
  ];
  return (
    <AppLayout customClasses={["Home"]}>
      <Banner />
      {moviesRows.map((mr, key) => (
        <Row
          key={mr.id}
          timeOutValue={2000 * parseInt(mr.id)}
          isLargeRow={!!mr?.isLargeRow}
          title={mr.title}
          fetchURL={mr.fetchURL}
        />
      ))}
    </AppLayout>
  );
};

export default Home;
