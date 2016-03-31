'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.connectModal = undefined;

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var connectModal = exports.connectModal = function connectModal(Modal) {
    var mapStateToProps = function mapStateToProps(state) {
        return state.modal[Modal.displayName];
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            handleShow: function handleShow() {
                dispatch((0, _actions.showModal)(Modal.displayName));
            },
            handleHide: function handleHide() {
                dispatch((0, _actions.hideModal)(Modal.displayName));
            }
        };
    };

    var ConnectedModal = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Modal);

    ConnectedModal.modalName = Modal.displayName;

    return ConnectedModal;
};