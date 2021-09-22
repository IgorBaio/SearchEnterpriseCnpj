import {
    TOGGLE_ALERT,
} from "../actions/types";
  
const initialState = {
    show: false,
    settings: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_ALERT:
            return {
                ...state,
                settings: action.payload.settings,
                show: action.payload.show
            };
        default:
            return state;
    }
}