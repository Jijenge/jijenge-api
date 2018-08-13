import db from '../../config/database/postgreSQL/index';
import { saveMessage } from './contactHelpers';
import {
  success, 
  error
} from '../../../../lib/log';

export const saveMessageQuery = async(payload) => {
  try {
    const query = {
      text: saveMessage,
      values: [payload.fullName, payload.email, payload.message]
    }
    const data = await db.query(query);
    success('signUpQuery - successfully retrieved data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('signUpQuery - error= ', err);
    throw new Error(err);
  }
};