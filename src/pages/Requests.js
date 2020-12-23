import React from 'react';
import DashContainer from '../components/DashContainer';
import RequestDetails from '../components/RequestDetails';
import GenerateInvoice from '../components/GenerateInvoice';
import { Switch, Route, withRouter } from 'react-router-dom';
import CreateInvoice from '../components/CreateInvoice';

const Requests = (props) => {
  return (
    <DashContainer>
      <section>
        <Switch>
          <Route
            exact
            path={`${props.match.path}`}
            component={RequestDetails}
          />
          <Route
            exact
            path={`${props.match.path}/generateinvoice`}
            component={GenerateInvoice}
          />
          <Route
            exact
            path={`${props.match.path}/createinvoice`}
            component={CreateInvoice}
          />
        </Switch>
      </section>
    </DashContainer>
  );
};

export default withRouter(Requests);
