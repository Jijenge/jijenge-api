import express from 'express'; 
const router = express.Router();

import {
  donorsCheckout
} from './paymentController'; 

router.route('/checkout')
  .post(donorsCheckout);

export default router; 