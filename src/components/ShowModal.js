import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../actions';

class ShowModal extends Component {
    handleClick() {
        const { dispatch, modalName } = this.props;
        dispatch(showModal(modalName));
    }

    render() {
        return (
            <div className='show-modal' onClick={() => this.handleClick()}>
                {this.props.children}
            </div>
        );
    }
}

ShowModal.propTypes = {
    modalName: React.PropTypes.string,
    dispatch: React.PropTypes.function,
    children: React.PropTypes.node
}

export default connect()(ShowModal);