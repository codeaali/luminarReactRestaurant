
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import RestaurantDetails from './components/RestaurantDetails';


function App() {
  return (
    <Router>
    <main className="App">
      <Container>
      <Route exact path='/' component={Home}/>
      <Route path='/restaurants/:id' component={RestaurantDetails}/>
      </Container>
      
    </main>
    </Router>
  );
}

export default App;
