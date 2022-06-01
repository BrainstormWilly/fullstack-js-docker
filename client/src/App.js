import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Fib Calculator 2</h1>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
      </header>
      <Switch>
        <Route path="/otherPage" component={OtherPage} />
        <Route path="/" component={Fib} />
      </Switch>
    </div>
  </Router>
);

export default App;
