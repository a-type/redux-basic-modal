import React, { Component } from 'react';
import { Modals, ShowModal } from '../../../src';
import HelloModal from './HelloModal';
import WorldModal from './WorldModal';

export default class App extends Component {
    render() {
        return (
            <div className='app'>
                <div className='app-content'>
                    <ShowModal modalName='HelloModal'>Show Hello</ShowModal>
                    <ShowModal modalName='WorldModal'>Show World</ShowModal>
                </div>
                <Modals closeWhenBackerClicked>
                    <HelloModal/>
                    <WorldModal/>
                </Modals>
            </div>
        );
    }
}