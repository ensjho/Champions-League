/*
 * Home
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import H1 from 'components/H1';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import Section from './Section';
import { loadTeamNames } from './actions';
import { makeTeamNamesSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function Home({ teamNames, loading, error, dispatchloadTeamNames }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    /** fetch intial data (array of strings) */
    if (!error) dispatchloadTeamNames();
  }, []);

  let renderedContainer;

  /** Waiting for API call to be completed in saga */
  if (loading) {
    renderedContainer = <LoadingIndicator />;
  }

  /** if loading is false
   *     error is false
   *     teamNames is defined;
   * then render the data that was fetched from the backend;
   */
  if (!loading && !error && teamNames) {
    renderedContainer = <List items={teamNames} component={ListItem} />;
  }

  /** if error, render error
   */
  if (error) {
    renderedContainer = <List items={error} component={ListItem} />;
  }

  return (
    <Section>
      <H1>Champions League Participants</H1>
      {renderedContainer}
    </Section>
  );
}

Home.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  teamNames: PropTypes.array,
  dispatchloadTeamNames: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  teamNames: makeTeamNamesSelector(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatchloadTeamNames: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadTeamNames());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Home);
