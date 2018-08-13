import {
  success, 
  error
} from '../../../../lib/log';
import { saveMessageQuery } from './contactQueries'; 

export const contactUs = async(req, res) => {
  try {
    const data = await saveMessageQuery(req.body); 
    res.status(200).send('Successfully received data'); 
    success('Successfully save data to contactUs table'); 
  } catch (err) {
    error('Error from contactUsController => ', err);
  }
}