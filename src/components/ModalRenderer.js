import React, { Component } from 'react';

class ModalRenderer extends Component {
    render() {
        const { children, modal, className, hideModal, closeWhenBackerClicked } = this.props;

        let modalMap = {};

        if (!children.length) {
            modalMap[children.type.modalName] = children;
        } else {
            modalMap = children.reduce((map, modal) => {
                map[modal.type.modalName] = modal;
                return map;
            }, modalMap);
        }

        const renderedModals = [];
        Object.keys(modal).map((modalName) => {
            if (modal[modalName].shown) {
                renderedModals.push(modalMap[modalName]);
            }
        });

        if (renderedModals.length) {
            return (
                <div className={className || 'modal-blocker'} onClick={() => {
                    if (closeWhenBackerClicked) {
                        const topModal = renderedModals.pop();
                        hideModal(topModal.type.modalName);
                    }
                }}>
                    {renderedModals}
                </div>
            );
        } else {
            return null;
        }
    }
}

ModalRenderer.propTypes = {
    children: React.PropTypes.node,
    modal: React.PropTypes.object,
    className: React.PropTypes.string,
    hideModal: React.PropTypes.function,
    closeWhenBackerClicked: React.PropTypes.bool
}

export default ModalRenderer;