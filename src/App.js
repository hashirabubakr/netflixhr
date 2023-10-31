
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './request';
function App() {
  return (
    <div >
      <Nav/ >
      <Banner fetchURL={requests.fetchNetflixOriginals}/>
   
     <Row isPoster={true} title="NetflixOriginals" fetchURL={requests.fetchNetflixOriginals} / >
     <Row title="Top rated" fetchURL={requests.fetchTopRated} / >
     <Row title="Top rated" fetchURL={requests.fetchActionMovies} / >
    </div>
  );
}

export default App;
