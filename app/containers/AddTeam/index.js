/*
 * AddTeam
 *
 * This is where user gets to add new team (string) to the database by post request, at the '/regist' route
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import H2 from 'components/H2';
import Button from './Button';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import Warning from './Warning';
import ErrorArea from './ErrorArea';
import Success from './Success';
import messages from './messages';
import { changeTeamname, addTeamname, resetMessages } from './actions';
import {
  makeSelectTeamname,
  makeSelectError,
  makeSelectLoading,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'AddTeam';

export function AddTeam({
  teamname,
  loading,
  error,
  onsubmitTeamname,
  onchangeTeamname,
  dispatchResetMessages,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  let alertSuccess = '';
  let alertFailure = '';

  if (loading.message) {
    alertSuccess = loading.message;
  }

  if (error) {
    alertFailure = error;
  }

  const onSubmitForm = evt => {
    dispatchResetMessages();
    onsubmitTeamname(evt);
  };

  return (
    <article>
      <Helmet>
        <title>Add Team</title>
        <meta name="Add team" content="Register your team" />
      </Helmet>
      <div>
        <CenteredSection>
          <H2>
            <FormattedMessage {...messages.startProjectHeader} />
          </H2>
          <p>
            <FormattedMessage {...messages.startProjectMessage} />
          </p>
          <p>
            <FormattedMessage {...messages.startProjectMessage2} />
          </p>
        </CenteredSection>
        <Section>
          <H2>
            <FormattedMessage {...messages.trymeHeader} />
          </H2>
          <Form onSubmit={onSubmitForm}>
            <label htmlFor="teamname">
              <Input
                id="teamname"
                type="text"
                placeholder="Insert your team name"
                value={teamname}
                onChange={onchangeTeamname}
              />
            </label>
            <Button>Add Team</Button>
          </Form>
          <ErrorArea>
            <Success> {alertSuccess} </Success>
            <Warning> {alertFailure} </Warning>
          </ErrorArea>
        </Section>
      </div>
    </article>
  );
}

AddTeam.propTypes = {
  loading: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.bool,
  ]),
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.bool,
  ]),
  onsubmitTeamname: PropTypes.func,
  teamname: PropTypes.string,
  onchangeTeamname: PropTypes.func,
  dispatchResetMessages: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  teamname: makeSelectTeamname(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onchangeTeamname: evt => dispatch(changeTeamname(evt.target.value)),
    onsubmitTeamname: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(addTeamname());
    },
    dispatchResetMessages: () => dispatch(resetMessages()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AddTeam);
