import React, { Component } from 'react';
import { Modal, connectModal } from '../../../src';

class HelloModal extends Component {
    render() {
        return (
            <Modal {...this.props}>
                Hello!
            </Modal>
        );
    }
}

export default connectModal(HelloModal);