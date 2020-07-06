/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Home from 'containers/Home/Loadable';
import AddTeam from 'containers/AddTeam/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="Add Football Team Name"
        defaultTitle="Football Team Name"
      >
        <meta
          name="description"
          content="React.js Boilerplate Football TeamName application"
        />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={AddTeam} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
