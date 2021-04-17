import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from  './component/header'
import lobby from './pages/lobby/lobby'

import PageNotFound from './pages/PageNotFound'


function App() {
  return (
    <BrowserRouter>
      <>
      <Navbar />
      <div className="container mx-auto ">
        <Switch>
        <Route path="/" component={lobby} exact/>
          <Route path="/lobby" component={lobby} exact />
          <Route component={PageNotFound}/>
        </Switch>
      </div>
      </>
    </BrowserRouter>
  );
}

export default App;