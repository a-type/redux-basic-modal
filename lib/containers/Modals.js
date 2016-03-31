'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _ModalRenderer = require('../components/ModalRenderer');

var _ModalRenderer2 = _interopRequireDefault(_ModalRenderer);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        modal: state.modal
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        hideModal: function hideModal(modalName) {
            dispatch((0, _actions.hideModal)(modalName));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ModalRenderer2.default);