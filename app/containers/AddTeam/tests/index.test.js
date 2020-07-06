/**
 * Test the AddTeam
 */

import React from 'react';
import { IntlProvider } from 'react-intl';
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { AddTeam, mapDispatchToProps } from '../index';
import { changeTeamname, addTeamname } from '../actions';
import configureStore from '../../../configureStore';

describe('<AddTeam />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <AddTeam
            teamname=""
            loading={false}
            error={false}
            onsubmitTeamname={jest.fn()}
            onchangeTeamname={jest.fn()}
            dispatchResetMessages={jest.fn()}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should not call onsubmitTeamname if teamname is null', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <AddTeam
            teamname=""
            loading={{ message: 'fetching failed' }}
            onchangeTeamname={() => {}}
            onsubmitTeamname={submitSpy}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onchangeTeamname', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onchangeTeamname).toBeDefined();
      });

      it('should dispatch onchangeTeamname when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const teamname = 'Dortmund';
        result.onchangeTeamname({ target: { value: teamname } });
        expect(dispatch).toHaveBeenCalledWith(changeTeamname(teamname));
      });
    });

    describe('onsubmitTeamname', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onsubmitTeamname).toBeDefined();
      });

      it('should dispatch addTeamname when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onsubmitTeamname();
        expect(dispatch).toHaveBeenCalledWith(addTeamname());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onsubmitTeamname(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
