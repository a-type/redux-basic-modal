import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from './Main';

export default class Root extends Component {
    render() {
        const { store } = this.props;
        return(
            <Provider store={store}>
                <Main/>
            </Provider>
        );
    }
}