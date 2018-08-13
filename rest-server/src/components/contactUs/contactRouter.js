import express from 'express'; 
const router = express.Router();

import {
  contactUs
} from './contactController'; 

router.route('/message')
  .post(contactUs);

export default router; 