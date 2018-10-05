import {
  saveCustomerHelper
} from './paymentHelpers.js';
import db from '../../config/database/postgreSQL/index.js';

export const saveCustomer = async (payload) => {
  const { name, lastname, customerid, email } = payload; 
  try {
    const query = {
      text: saveCustomerHelper,
      values: [name, lastname, customerid, email]
    }
    // console.log("query", query);
    const data = await db.query(query);
    console.log('Data?', data);
    success('save customer query - successfully retrieved data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('save customer query - error= ', err);
    throw new Error(err);
  }
};