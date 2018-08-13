import {
  createDatabase,
  createContactUs,
  createMonthlyDonors,
  createVisitAfrica,
  dropDatabase,
  dropContactUs,
  dropMonthlyDonors,
  dropVisitAfrica
} from '../../../lib/pg';

const setup = async () => {
  await dropDatabase();
  await dropContactUs();
  await dropMonthlyDonors();
  await dropVisitAfrica(); 
  await createDatabase();
  await createContactUs();
  await createMonthlyDonors();
  await createVisitAfrica();
  process.exit();
};

setup();
