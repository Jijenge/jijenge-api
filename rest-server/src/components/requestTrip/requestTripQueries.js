import db from '../../config/database/postgreSQL/index';
import { saveEmail } from './requestTripHelpers';
import {
  success, 
  error
} from '../../../../lib/log';

export const saveTripEmail = async(payload) => {
  try {
    const query = {
      text: saveEmail,
      values: [payload.email]
    }
    const data = await db.query(query);
    success('signUpQuery - successfully retrieved data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('signUpQuery - error= ', err);
    throw new Error(err);
  }
};