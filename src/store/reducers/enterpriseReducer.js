import {
  ENTERPRISE_GET_DATA_SUCCESS,
  ENTERPRISE_GET_DATA,
  ENTERPRISE_GET_DATA_STARRED_SUCCESS,
  ENTERPRISE_GET_DATA_ON_DATABASE,
  ENTERPRISE_GET_DATA_ON_DATABASE_SUCCESS,
  ENTERPRISE_GET_DATA_STARRED,
  ENTERPRISE_GET_DATA_FAIL,
  ENTERPRISE_GET_DATA_ON_DATABASE_FAIL,
  ENTERPRISE_GET_DATA_STARRED_FAIL,
  ENTERPRISE_GET_DATA_DATABASE_SUCCESS,
  ENTERPRISE_GET_DATA_DATABASE,
  ENTERPRISE_GET_DATA_DATABASE_FAIL,
} from "../actions/types";

const INITIAL_STATE = {
  enterprise: [],
  repos: null,
  starred: null,
  loading: false,
  enterprises: [],
};

const enterpriseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ENTERPRISE_GET_DATA:
      return {
        ...state,
        loading: true,
      };

    case ENTERPRISE_GET_DATA_SUCCESS:
      return {
        ...state,
        enterprise: [action.payload],
        loading: false,
      };
    case ENTERPRISE_GET_DATA_ON_DATABASE:
      return {
        ...state,
        loading: true,
      };

    case ENTERPRISE_GET_DATA_ON_DATABASE_SUCCESS:
      return {
        ...state,
        repos: action.payload,
        starred: null,
        loading: false,
      };
    case ENTERPRISE_GET_DATA_DATABASE:
      return {
        ...state,
        loading: true,
      };

    case ENTERPRISE_GET_DATA_DATABASE_SUCCESS:
      return {
        ...state,
        enterprises: action.payload,
        loading: false,
      };
    case ENTERPRISE_GET_DATA_FAIL:
    case ENTERPRISE_GET_DATA_ON_DATABASE_FAIL:
    case ENTERPRISE_GET_DATA_DATABASE_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default enterpriseReducer;
