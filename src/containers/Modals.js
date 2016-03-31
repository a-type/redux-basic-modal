import { connect } from 'react-redux';
import ModalRenderer from '../components/ModalRenderer';
import { hideModal } from '../actions';

const mapStateToProps = state => {
    return {
        modal: state.modal
    };
}

const mapDispatchToProps = dispatch => {
    return {
        hideModal(modalName) {
            dispatch(hideModal(modalName));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalRenderer);