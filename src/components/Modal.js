'use strict';
import React, { Component } from 'react';

/**
 * An example Modal presentational component that may be used to wrap your modal content.
 */
class Modal extends Component {
    show() {
        this.props.handleShow();
    }

    hide() {
        this.props.handleHide();
    }

    render() {
        const { style, className, contentClassName, children, closeClassName } = this.props;

        return (
            <div style={style} className={className || 'modal'}>
                <div className={contentClassName || 'modal-content'}>
                    {children}
                </div>
                <div className={closeClassName || 'modal-close'} onClick={() => this.hide()}>
                    <div className='button-content'>&times;</div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    className: React.PropTypes.string,
    contentClassName: React.PropTypes.string,
    closeClassName: React.PropTypes.string,
    style: React.PropTypes.object,
    children: React.PropTypes.node,
    handleShow: React.PropTypes.function,
    handleHide: React.PropTypes.function
};

export default Modal;