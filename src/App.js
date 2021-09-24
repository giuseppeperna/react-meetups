import { Route, Switch } from 'react-router-dom';

import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';
function App() {
  return (
  <div>
    <Switch>
      <Route path='/' exact>
        <AllMeetups />
      </Route>
      <Route path='/new-meetup'>
        <NewMeetup />
      </Route>
      <Route path='/favorites'>
        <Favorites />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
