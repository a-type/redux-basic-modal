'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = require('../constants/actionTypes');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (state, action) {
    switch (action.type) {
        case _actionTypes.SHOW_MODAL:
            return _extends({}, state, _defineProperty({}, action.modalName, _extends({}, action.props, {
                shown: true
            })));
        case _actionTypes.HIDE_MODAL:
            return _extends({}, state, _defineProperty({}, action.modalName, _extends({}, action.props, {
                shown: false
            })));
        default:
            return _extends({}, state);
    }
};