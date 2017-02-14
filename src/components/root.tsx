import * as React from 'react';
import { Provider, ProviderProps } from 'react-redux';

import App from '../App';

const Root: React.SFC<ProviderProps> = ({ store }) => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default Root;