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
    ModalRenderer: {
        displayName: 'ModalRenderer'
    }
};

var _CUsersATypDocumentsGitReduxBasicModalNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/ModalRenderer.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _CUsersATypDocumentsGitReduxBasicModalNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/ModalRenderer.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _CUsersATypDocumentsGitReduxBasicModalNode_modulesReactTransformHmrLibIndexJs2(_CUsersATypDocumentsGitReduxBasicModalNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var ModalRenderer = _wrapComponent('ModalRenderer')(function (_Component) {
    _inherits(ModalRenderer, _Component);

    function ModalRenderer() {
        _classCallCheck(this, ModalRenderer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalRenderer).apply(this, arguments));
    }

    _createClass(ModalRenderer, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var children = _props.children;
            var modal = _props.modal;
            var className = _props.className;
            var hideModal = _props.hideModal;
            var closeWhenBackerClicked = _props.closeWhenBackerClicked;


            var modalMap = {};

            if (!children.length) {
                modalMap[children.type.modalName] = children;
            } else {
                modalMap = children.reduce(function (map, modal) {
                    map[modal.type.modalName] = modal;
                    return map;
                }, modalMap);
            }

            var renderedModals = [];
            Object.keys(modal).map(function (modalName) {
                if (modal[modalName].shown) {
                    renderedModals.push(modalMap[modalName]);
                }
            });

            if (renderedModals.length) {
                return _react3.default.createElement(
                    'div',
                    { className: className || 'modal-blocker', onClick: function onClick() {
                            if (closeWhenBackerClicked) {
                                var topModal = renderedModals.pop();
                                hideModal(topModal.type.modalName);
                            }
                        } },
                    renderedModals
                );
            } else {
                return null;
            }
        }
    }]);

    return ModalRenderer;
}(_react2.Component));

ModalRenderer.propTypes = {
    children: _react3.default.PropTypes.node,
    modal: _react3.default.PropTypes.object,
    className: _react3.default.PropTypes.string,
    hideModal: _react3.default.PropTypes.function,
    closeWhenBackerClicked: _react3.default.PropTypes.bool
};

exports.default = ModalRenderer;