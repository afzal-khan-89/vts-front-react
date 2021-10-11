import Nav from './Pages/Nav';
import Tracking from './Pages/Tracking';
import Home from './Pages/Home/Home'
import Reports from './Pages/Reports';
import Opearation from './Pages/Opearation'
import Tr from './Pages/Map';


import { BrowserRouter as Router, Switch, router, Route }  from 'react-router-dom'


function App() {
  return (
    <Router>
        <div className="App">
            <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/tracking" component={Tr} />
                    <Route path="/reports" component={Reports} />
                    <Route path="/opeartion" component={Opearation} />
              </Switch>
        </div>
    </Router>

  );
}

export default App;
