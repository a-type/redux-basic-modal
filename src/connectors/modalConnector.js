import { connect } from 'react-redux';
import { showModal, hideModal } from '../actions';

export const connectModal = Modal => {
      const mapStateToProps = state => {
          return state.modal[Modal.displayName];
      }

      const mapDispatchToProps = dispatch => {
          return {
              handleShow() {
                  dispatch(showModal(Modal.displayName));
              },

              handleHide() {
                  dispatch(hideModal(Modal.displayName));
              }
          };
      }

      const ConnectedModal = connect(
          mapStateToProps,
          mapDispatchToProps
      )(Modal);

      ConnectedModal.modalName = Modal.displayName;

      return ConnectedModal;
};