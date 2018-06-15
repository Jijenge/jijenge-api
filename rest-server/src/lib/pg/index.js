require('dotenv').config();
import db from '../../config/database/postgreSQL/index.js';

import {
  success, 
  error
} from '../../../../lib/log'; 

const database = process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE;

export const createDatabase = async () => {
  try {
    await db.query(
      `CREATE DATABASE ${database}`
    );
    success('successfully created database ', database);
  } catch (err) {
    error('error creating database ', err);
  }
};

export const dropDatabase = async () => {
  try {
    await db.query(
      `DROP DATABASE IF EXISTS ${database}`
    );
    success('successfully dropped database ', database);
  } catch (err) {
    error('error dropping database ', err);
  }
};

export const useDatabase = async () => {
  try {
    await db.query(
      `USE IF EXISTS ${database}`
    );
    success('successfully using database ', database);
  } catch (err) {
    error('error using database ', err);
  }
};

// user table - creation and deletion (0 is a user, 1 is a business, 2 is a delivery user)

export const createMailingList = async () => {
  try {
    await db.query( 
      `
      CREATE TABLE IF NOT EXISTS mailingList
      (
        id SERIAL,
        name varchar (50),
        lastName varchar (50),
        email varchar (50) UNIQUE 
      )
      `
    );
    success('successfully created mailingList table');
  } catch (err) {
    error('error creating mailingList table ', err)
  }
};

export const dropMailingList = async () => {
  try {
    await db.query(
      `DROP TABLE IF EXISTS mailingList`
    )
    success('successfully dropped mailingList table');
  } catch (err) {
    error('error dropping mailingList table ', err);
  }
};

export const createMonthlyDonors = async () => {
  try {
    await db.query( 
      `
      CREATE TABLE IF NOT EXISTS monthlyDonors
      (
        id SERIAL,
        name varchar (50),
        lastName varchar (50),
        paymentid varchar (50),
        stripeAccount varchar (50),
        email varchar (50) UNIQUE 
      )
      `
    );
    success('successfully created monthlyDonors table');
  } catch (err) {
    error('error creating monthlyDonors table ', err)
  }
};

export const dropMonthlyDonors = async () => {
  try {
    await db.query(
      `DROP TABLE IF EXISTS monthlyDonors`
    )
    success('successfully dropped monthlyDonors table');
  } catch (err) {
    error('error dropping monthlyDonors table ', err);
  }
};