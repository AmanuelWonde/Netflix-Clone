
import './App.css';
import Banner from './Components/Main/Banner/Banner';
import Nav from './Components/Main/Nav/Nav';
import Row from './Components/Main/Row/Row';
import requests from './Components/Main/Row/requests';
function App() {
return (
    <div className="App">
     <Nav/>
     <Banner/>
    <Row title="NETFLIX ORIGINALS"  url = {requests.fetchNetflixOriginals} Name = 'classNamee' rowLarge ='row__posterLarge' />
    <Row title="Trending Now"  url ={ requests.fetchTrending} Name = 'classNamee'/>
    <Row title="Top Rated"  url ={ requests.fetchTopRatedMovies} Name = 'classNamee'/>
    <Row title="Action Movies"  url ={ requests.fetchActionMovies} Name = 'classNamee'/>
    <Row title="Comedy Movies"  url ={requests.fetchComedyMovies} Name = 'classNamee'/>
    <Row title="Horror Movies"  url ={ requests.fetchHorrorMovies} Name = 'classNamee'/>
    <Row title="Romance Movies" url ={requests.fetchRomanceMovies} Name = 'classNamee'/>
    <Row title="Documentary Movies"  url ={requests.fetchDocumentaries} Name = 'classNamee'/>


    </div>
  );
}

export default App;
