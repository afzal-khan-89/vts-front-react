//import Nav from './Pages/Nav';
//import Nav from './Components/Nav/Nav'
import NavRnd from './Components/Nav/NavRnd'
import Tracking from './Pages/Tracking';
import Home from './Pages/Home'
import Reports from './Pages/Reports';
import Opearation from './Pages/Opearation'


import { BrowserRouter as Router, Switch, router, Route }  from 'react-router-dom'


function App() {
  return (
    <Router>
        <div className="App">
            <NavRnd />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/tracking" component={Tracking} />
                    <Route path="/reports" component={Reports} />
                    <Route path="/opeartion" component={Opearation} />
              </Switch>
        </div>
    </Router>

  );
}

export default App;
