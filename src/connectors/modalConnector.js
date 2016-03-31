import { connect } from 'react-redux';
import { showModal, hideModal } from '../actions';

export const connectModal = (Modal, modalName) => {
      const mapStateToProps = state => {
          return state.modal[modalName];
      }

      const mapDispatchToProps = dispatch => {
          return {
              handleShow() {
                  dispatch(showModal(modalName));
              },

              handleHide() {
                  dispatch(hideModal(modalName));
              }
          };
      }

      const ConnectedModal = connect(
          mapStateToProps,
          mapDispatchToProps
      )(Modal);

      ConnectedModal.modalName = modalName;

      return ConnectedModal;
};