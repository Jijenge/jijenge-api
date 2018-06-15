import {
  createDatabase,
  createMailingList,
  createMonthlyDonors,
  dropDatabase,
  dropMailingList,
  dropMonthlyDonors
} from '../../../lib/pg';

const setup = async () => {
  await dropDatabase();
  await dropMailingList();
  await dropMonthlyDonors();
  await createDatabase();
  await createMailingList();
  await createMonthlyDonors();
  process.exit();
};

setup();
