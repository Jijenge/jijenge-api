import {
  success, 
  error
} from '../../../../lib/log';
import { saveTripEmail } from './requestTripQueries'; 

export const requestTripItenerary = async(req, res) => {
  try {
    const data = await saveTripEmail(req.body); 
    res.status(200).send('Successfully received data'); 
    success('Successfully save email requesting itenerary'); 
  } catch (err) {
    error('Error from requestTripController => ', err);
  }
}