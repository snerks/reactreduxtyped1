import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore /*, applyMiddleware */ } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './reducers/rootReducer';

it('renders without crashing', () => {
  const store = createStore(
    rootReducer
  );

  const div = document.createElement('div');

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});
