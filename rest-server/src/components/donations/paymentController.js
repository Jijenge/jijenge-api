import {
  success, 
  error
} from '../../../../lib/log'; 

export const donorsCheckout = async(req, res) => {
  try {
    res.status(200).send('Success'); 
    success('Successfully process data from paymentController'); 
  } catch (err) {
    error('Error from paymentController => ', err);
  }
}