import Nav from './Pages/Nav';
import Tracking from './Pages/Tracking';
import Home from './Pages/Home/Home'
import Reports from './Pages/Reports/Reports';
import Opearation from './Pages/Opearation/Opearation'
import Tr from './Pages/Map/StreetMap/Map.js';
import Gmap from './Pages/Map/GMap/GoogleMapr'


import { BrowserRouter as Router, Switch, router, Route }  from 'react-router-dom'
import Admin from './Pages/Admin/Admin';
import Accounting from './Pages/Accounting/Accounting';
import ServiceCharge from './Pages/Servicecharge/ServiceCharge';


function App() {
  return (
    <Router>
        <div className="App">
            <Nav />
            <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/tracking" component={Gmap} />
                    <Route path="/reports" component={Reports} />
                    <Route path="/opeartion" component={Opearation} />
                    <Route path="/accounting" component={Accounting} />
                    <Route path="/service-charge" component={ServiceCharge} />
                    <Route path="/admin" component={Admin} />
          </Switch>
        </div>
    </Router>

  );
}

export default App;
