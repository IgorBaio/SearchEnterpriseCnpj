import {
    TOGGLE_ALERT,
} from "./types";


export function toggleAlert(show, settings) {
    return {
        type: TOGGLE_ALERT,
        payload: {
            settings,
            show
        }
    };
}