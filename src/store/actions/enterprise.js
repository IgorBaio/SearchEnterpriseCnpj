import {
    ENTERPRISE_GET_DATA,
    ENTERPRISE_GET_DATA_ON_DATABASE,
    ENTERPRISE_GET_DATA_STARRED,
    ENTERPRISE_GET_DATA_SUCCESS,
    ENTERPRISE_GET_DATA_ON_DATABASE_SUCCESS,
    ENTERPRISE_GET_DATA_STARRED_SUCCESS,
    ENTERPRISE_GET_DATA_STARRED_FAIL,
    ENTERPRISE_GET_DATA_ON_DATABASE_FAIL,
    ENTERPRISE_GET_DATA_FAIL,
    DELETE_ENTERPRISE,
    DELETE_ENTERPRISE_FAIL,
    DELETE_ENTERPRISE_SUCCESS,
    ENTERPRISE_GET_DATA_DATABASE,
    ENTERPRISE_GET_DATA_DATABASE_SUCCESS,
    ENTERPRISE_GET_DATA_DATABASE_FAIL
} from "./types";

export const getEnterprise = (payload, resolve = null, reject = null) => ({
   type: ENTERPRISE_GET_DATA,
   payload,
   resolve,
   reject,
 });
 
 export const getEnterpriseSuccess = ({ payload }) => ({
   type: ENTERPRISE_GET_DATA_SUCCESS,
   payload,
 });
 export const getEnterpriseFail = () => ({
   type: ENTERPRISE_GET_DATA_FAIL,
 });

 export const getEnterpriseFromDatabase = ( resolve = null, reject = null) => ({
   type: ENTERPRISE_GET_DATA_DATABASE,
   resolve,
   reject,
 });
 
 export const getEnterpriseFromDatabaseSuccess = ({ payload }) => ({
   type: ENTERPRISE_GET_DATA_DATABASE_SUCCESS,
   payload,
 });
 export const getEnterpriseFromDatabaseFail = () => ({
   type: ENTERPRISE_GET_DATA_DATABASE_FAIL,
 });

 export const setEnterpriseOnDatabase = (payload, resolve = null, reject = null) => ({
   type: ENTERPRISE_GET_DATA_ON_DATABASE,
   payload,
   resolve,
   reject,
 });
 
 export const setEnterpriseOnDatabaseSuccess = ({ payload }) => ({
   type: ENTERPRISE_GET_DATA_ON_DATABASE_SUCCESS,
   payload,
 });
 export const setEnterpriseOnDatabaseFail = () => ({
   type: ENTERPRISE_GET_DATA_ON_DATABASE_FAIL,
 });
 export const deleteEnterpriseOnDatabase = (payload, resolve = null, reject = null) => ({
   type: DELETE_ENTERPRISE,
   payload,
   resolve,
   reject,
 });
 
 export const deleteEnterpriseOnDatabaseSuccess = ({ payload }) => ({
   type: DELETE_ENTERPRISE_SUCCESS,
   payload,
 });
 export const deleteEnterpriseOnDatabaseFail = () => ({
   type: DELETE_ENTERPRISE_FAIL,
 });

 export const getEnterpriseStarred = (payload, resolve = null, reject = null) => ({
   type: ENTERPRISE_GET_DATA_STARRED,
   payload,
   resolve,
   reject,
 });
 
 export const getEnterpriseStarredSuccess = ({ payload }) => ({
   type: ENTERPRISE_GET_DATA_STARRED_SUCCESS,
   payload,
 });
 
 export const getEnterpriseStarredFail = () => ({
   type: ENTERPRISE_GET_DATA_STARRED_FAIL,
 });

 