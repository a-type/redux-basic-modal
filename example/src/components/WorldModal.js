import React, { Component } from 'react';
import { Modal, connectModal } from '../../../src';

class WorldModal extends Component {
    render() {
        return (
            <Modal {...this.props}>
                World!
            </Modal>
        );
    }
}

export default connectModal(WorldModal);