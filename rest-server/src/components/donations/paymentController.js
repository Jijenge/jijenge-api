const stripe = require("stripe")("sk_test_y4H1Zrtqn5ObtiKeXumvuI93");
import {
  success, 
  error
} from '../../../../lib/log'; 


export const donorsCheckout = async(req, res) => {
  try {
    let data = await stripe.charges.create({
      amount: req.body.amount, 
      currency: "usd", 
      description: "An example charge",
      source: req.body.token 
    }); 
    res.status(200).send('Successfully process donation'); 
    success('Successfully process data from paymentController'); 
  } catch (err) {
    error('Error from paymentController => ', err);
  }
}

// Create a product Monthly Donation Jijenge Academy 
// Create a plan using always the same product ID 
// Check db 




// export const createMonthlyDonor = async(req, res) => {
//   try {
//     const stripe = require("stripe")("sk_test_y4H1Zrtqn5ObtiKeXumvuI93");
//     const plan = await stripe.plans.create({
//       amount: req.body.amount,
//       interval: 'month',
//       product: {
//         name: 'Monthly Donation Jijenge Academy'
//       },
//       currency: 'usd'
//     }); 
//     const customer = await stripe.customers.create({
//       email: req.body.email,
//       source: req.body.token,
//     });
//     console.log('creating subscription', customer)

//   } catch (err) {

//   }
// }