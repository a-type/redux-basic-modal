import { SHOW_MODAL, HIDE_MODAL } from '../constants/actionTypes';

export const showModal = modalName => {
    return {
        type: SHOW_MODAL,
        modalName
    };
}

export const hideModal = modalName => {
    return {
        type: HIDE_MODAL,
        modalName
    };
}