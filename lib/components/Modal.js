'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('C:\\Users\\a-typ\\Documents\\Git\\redux-basic-modal\\node_modules\\redbox-react\\lib\\index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('C:\\Users\\a-typ\\Documents\\Git\\redux-basic-modal\\node_modules\\react-transform-catch-errors\\lib\\index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('C:\\Users\\a-typ\\Documents\\Git\\redux-basic-modal\\node_modules\\react-transform-hmr\\lib\\index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Modal: {
        displayName: 'Modal'
    }
};

var _CUsersATypDocumentsGitReduxBasicModalNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/Modal.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _CUsersATypDocumentsGitReduxBasicModalNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/Modal.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _CUsersATypDocumentsGitReduxBasicModalNode_modulesReactTransformHmrLibIndexJs2(_CUsersATypDocumentsGitReduxBasicModalNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

/**
 * An example Modal presentational component that may be used to wrap your modal content.
 */

var Modal = _wrapComponent('Modal')(function (_Component) {
    _inherits(Modal, _Component);

    function Modal() {
        _classCallCheck(this, Modal);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).apply(this, arguments));
    }

    _createClass(Modal, [{
        key: 'show',
        value: function show() {
            this.props.handleShow();
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.props.handleHide();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props;
            var style = _props.style;
            var className = _props.className;
            var contentClassName = _props.contentClassName;
            var children = _props.children;
            var closeClassName = _props.closeClassName;


            return _react3.default.createElement(
                'div',
                { style: style, className: className || 'modal' },
                _react3.default.createElement(
                    'div',
                    { className: contentClassName || 'modal-content' },
                    children
                ),
                _react3.default.createElement(
                    'div',
                    { className: closeClassName || 'modal-close', onClick: function onClick() {
                            return _this2.hide();
                        } },
                    _react3.default.createElement(
                        'div',
                        { className: 'button-content' },
                        '×'
                    )
                )
            );
        }
    }]);

    return Modal;
}(_react2.Component));

Modal.propTypes = {
    className: _react3.default.PropTypes.string,
    contentClassName: _react3.default.PropTypes.string,
    closeClassName: _react3.default.PropTypes.string,
    style: _react3.default.PropTypes.object,
    children: _react3.default.PropTypes.node,
    handleShow: _react3.default.PropTypes.function,
    handleHide: _react3.default.PropTypes.function
};

exports.default = Modal;