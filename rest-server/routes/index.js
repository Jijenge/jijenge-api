import express from 'express'; 

import paymentRouter from '../src/components/donations/paymentRouter';

const router = express.Router();

router.use('/stripe', paymentRouter);

export default router; 