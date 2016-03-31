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

var _reactRedux = require('react-redux');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    ShowModal: {
        displayName: 'ShowModal'
    }
};

var _CUsersATypDocumentsGitReduxBasicModalNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/ShowModal.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _CUsersATypDocumentsGitReduxBasicModalNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/ShowModal.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _CUsersATypDocumentsGitReduxBasicModalNode_modulesReactTransformHmrLibIndexJs2(_CUsersATypDocumentsGitReduxBasicModalNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var ShowModal = _wrapComponent('ShowModal')(function (_Component) {
    _inherits(ShowModal, _Component);

    function ShowModal() {
        _classCallCheck(this, ShowModal);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ShowModal).apply(this, arguments));
    }

    _createClass(ShowModal, [{
        key: 'handleClick',
        value: function handleClick() {
            var _props = this.props;
            var dispatch = _props.dispatch;
            var modalName = _props.modalName;

            dispatch((0, _actions.showModal)(modalName));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react3.default.createElement(
                'div',
                { className: 'show-modal', onClick: function onClick() {
                        return _this2.handleClick();
                    } },
                this.props.children
            );
        }
    }]);

    return ShowModal;
}(_react2.Component));

ShowModal.propTypes = {
    modalName: _react3.default.PropTypes.string,
    dispatch: _react3.default.PropTypes.function,
    children: _react3.default.PropTypes.node
};

exports.default = (0, _reactRedux.connect)()(ShowModal);