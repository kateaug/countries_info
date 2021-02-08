import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Countries from './components/Countries';
import CountryDetail from './components/CountryDetail';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Countries />
          </Route>
          <Route path="/detail">
            <Header />
            <CountryDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
