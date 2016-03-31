'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hideModal = exports.showModal = undefined;

var _actionTypes = require('../constants/actionTypes');

var showModal = exports.showModal = function showModal(modalName) {
    return {
        type: _actionTypes.SHOW_MODAL,
        modalName: modalName
    };
};

var hideModal = exports.hideModal = function hideModal(modalName) {
    return {
        type: _actionTypes.HIDE_MODAL,
        modalName: modalName
    };
};