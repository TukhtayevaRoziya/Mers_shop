import { PERSONAL_INFO_LOADING } from './types';
import authApiInstance from '../../api/authApi';
const PERSONALINFO_API_ENDPOINT = "clientMainsAPI";

export const personalInfo = (personal__info) => async dispatch => {
    dispatch({
      type: PERSONAL_INFO_LOADING
    });
    authApiInstance.post(PERSONALINFO_API_ENDPOINT, personal__info)
      .then(response => console.log(response))
      .catch(err => console.log(err))

}