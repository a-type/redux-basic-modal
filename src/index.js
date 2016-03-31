import _reducer from './reducers/modal';
import _Modal from './components/Modal';
import _Modals from './containers/Modals';
import _ShowModal from './components/ShowModal';
import { connectModal as _connectModal } from './connectors/modalConnector';
import _actions from './actions';

export const reducer = _reducer;
export const connectModal = _connectModal;
export const Modal = _Modal;
export const Modals = _Modals;
export const actions = _actions;
export const ShowModal = _ShowModal;