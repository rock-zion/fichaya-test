import './index.css';
import Navigation from './components/Navigation';
import { Switch, Route, Redirect } from 'react-router-dom';
import Requests from './pages/Requests';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Switch>
        <Route path='/requests' component={Requests} />
        <Route
          exact
          path='/'
          render={() => {
            return <Redirect to='/requests' component={Requests} />;
          }}
        />
        <Route
          path='/schedules'
          render={() => {
            return <Redirect to='/requests' component={Requests} />;
          }}
        />
        <Route
          path='/dashboard'
          render={() => {
            return <Redirect to='/requests' component={Requests} />;
          }}
        />
        <Route
          path='/payments'
          render={() => {
            return <Redirect to='/requests' component={Requests} />;
          }}
        />
        <Route
          path='/customers'
          render={() => {
            return <Redirect to='/requests' component={Requests} />;
          }}
        />
        <Route
          path='/associates'
          render={() => {
            return <Redirect to='/requests' component={Requests} />;
          }}
        />
        <Route
          path='/settings'
          render={() => {
            return <Redirect to='/requests' component={Requests} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
