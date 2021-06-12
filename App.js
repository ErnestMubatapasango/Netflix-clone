import React from 'react';
import './App.css';
import Row from './Row.js';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
    
    
     <Banner/> 
     <Nav/>
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
     <Row title="Trending now" fetchUrl={requests.fetchTrending} />
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    


    </div>
  );
  //each row is a property
}

export default App;
