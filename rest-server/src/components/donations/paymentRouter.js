import express from 'express'; 
const router = express.Router();

import {
  oneTimeDonation
} from './paymentController'; 

router.route('/oneTimeDonation')
  .post(oneTimeDonation);

export default router; 