import express from 'express'; 
const router = express.Router();

import {
  requestTripItenerary
} from './requestTripController'; 

router.route('/itenerary')
  .post(requestTripItenerary);

export default router; 