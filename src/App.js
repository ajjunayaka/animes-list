import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Wishlist from './components/Wishlist';
function App() {
  return (
      <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route  path="/Wishlist">
          <Wishlist/>
        </Route>
      </Switch>


      
    </div>
    </Router>

  );
}

export default App;
