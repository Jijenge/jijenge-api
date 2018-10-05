import express from 'express'; 
const router = express.Router();

import {
  oneTimeDonation,
  monthlyDonation
} from './paymentController'; 

router.route('/oneTimeDonation')
  .post(oneTimeDonation);

router.route('/monthlyDonation')
  .post(monthlyDonation);

export default router; 