import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AppLayout from "../components/AppLayout/AppLayout";
import Banner from "../components/Banner/Banner";
import Row from "../components/Row/Row";
import { allRequests as requests } from "../api/movies";
import { fetchUser } from "../store/auth/actions";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  let user = useSelector((state) => state.auth.user);
  if (!user) {
    history.push("/");
  }
  return (
    <AppLayout customClasses={["Home"]}>
      <Banner />
      <Row
        isLargeRow={true}
        title="Top 10 in India today"
        fetchURL={requests.fetchTrendingToday}
      />
      <Row
        key={1}
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row key={2} title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row
        key={3}
        title="Action Movies"
        fetchURL={requests.fetchActionMovies}
      />
      <Row
        key={4}
        title="Comedy Movies"
        fetchURL={requests.fetchComedyMovies}
      />
      <Row
        key={5}
        title="Horror Movies"
        fetchURL={requests.fetchHorrorMovies}
      />
      <Row
        key={6}
        title="Documentries"
        fetchURL={requests.fetchDocumentaries}
      />
    </AppLayout>
  );
};

export default Home;
