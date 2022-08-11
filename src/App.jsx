
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Loading from './components/Loading/Loading.jsx';
import Projects from './pages/Projects.jsx';
import NotFound from './pages/NotFound';

function App() {
  return ( 
    <div>
        <Router>
          <Switch>            
          <Route exact path="/" component={ Loading } />
            <Route  path="/home" component={ Home } />
            <Route  path="/project" component={ Projects } />
            <Route exact path="*" component={ NotFound } />
          </Switch>
        </Router>
     </div>  
   );
}

export default App;

