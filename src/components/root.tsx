import * as React from 'react';
import { Provider, ProviderProps } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

// import App from '../App';
import Square from './square';

const Root: React.SFC<ProviderProps> = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={Square} />
        </BrowserRouter>
    </Provider>
);

export default Root;