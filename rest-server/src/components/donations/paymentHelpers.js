export const saveCustomerHelper = `
    INSERT INTO
      monthlydonors(name, lastname, customerid, email)
    VALUES
      ($1, $2, $3, $4)
    RETURNING
      id
`;