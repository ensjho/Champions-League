/**
 * Test the Home
 */

import React from 'react';
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { Home, mapDispatchToProps } from '../index';
import configureStore from '../../../configureStore';

describe('<Home />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <Home
          teamNames={['Arsenal']}
          loading={false}
          error={false}
          dispatchloadTeamNames={jest.fn()}
        />
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should fetch the teamNames on mount if error is false', () => {
    const mockFetchingTeamNames = jest.fn();
    render(
      <Provider store={store}>
        <Home
          teamNames={['Arsenal']}
          loading={false}
          error={false}
          dispatchloadTeamNames={mockFetchingTeamNames}
        />
      </Provider>,
    );
    expect(mockFetchingTeamNames).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('dispatchloadTeamNames', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.dispatchloadTeamNames).toBeDefined();
      });
    });
  });
});
