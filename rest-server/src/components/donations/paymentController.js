const SECRET = process.env.SECRET; 
const stripe = require("stripe")(SECRET);
import {
  success, 
  error
} from '../../../../lib/log'; 
import {
  saveCustomer
} from './paymentQueries.js'; 

export const oneTimeDonation = async(req, res) => {
  try {
    let data = await stripe.charges.create({
      amount: req.body.amount, 
      currency: "usd", 
      description: "One time donation",
      source: req.body.token 
    }); 
    res.status(200).send('Successfully process donation'); 
    success('Successfully process data from paymentController'); 
  } catch (err) {
    error('Error from one time donation => ', err);
  }
}

export const monthlyDonation = async(req, res) => {
  try {
    let { id } = await stripe.customers.create({
      description: `Customer for ${req.body.email}`,
      source: req.body.token, // obtained with Stripe.js
      email: req.body.email
    });
    let body = {
      customerid: id,
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
    };
    const data = await saveCustomer(body); 
    success('Successfully create a customer'); 
  } catch (err) {
    error('Error from monthly donation => ', err);
  }
}