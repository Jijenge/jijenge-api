import express from 'express'; 

import paymentRouter from '../src/components/donations/paymentRouter';
// import contactUsRouter from '../src/components/contactUs/contactRouter';
// import requestTripRouter from '../src/components/requestTrip/requestTripRouter';

const router = express.Router();

router.use('/stripe', paymentRouter);
// router.use('/submit', contactUsRouter);
// router.use('/request', requestTripRouter);



export default router;